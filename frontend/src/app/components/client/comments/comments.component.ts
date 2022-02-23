import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { Router } from '@angular/router';
import { ClientPublicService } from 'src/app/services/client/client-public.service';
import { NotificationService } from 'src/app/services/utill/notification.service';

interface CommentNode {
  commentId: number;
  commentDate: number;
  text: string;
  commentor: string;
  parent: any;
  productID: number;
  children?: CommentNode[];
}

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  @Input() productID: any;
  commentData: any;
  treeControl = new NestedTreeControl<CommentNode>((node) => node.children);
  dataSource = new MatTreeNestedDataSource<CommentNode>();
  commentForm: any;
  isLoggedIn = false;
  text = new FormControl('');
  userName: any;
  constructor(
    private clientpublickservice: ClientPublicService,
    private fb: FormBuilder,
    private notify: NotificationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.commentForm = this.fb.group({
      productID: this.productID,
      text: [''],
    });

    this.clientpublickservice.isLoggedin().subscribe({
      next: (success) => {
        this.isLoggedIn = true;
        this.userName = success.USER_NAME;
      },
      error: (err) => {
        this.isLoggedIn = false;
      },
    });
    this.getComment();
  }

  getComment() {
    this.clientpublickservice.getAllComments(this.productID).subscribe({
      next: (success) => {
        this.dataSource.data = this.getForest(success);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  submit() {
    this.clientpublickservice.addComment(this.commentForm.value).subscribe({
      next: (success) => {
        this.notify.showSuccess(success.messgae, 'Success');
        this.getComment();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  //reply
  reply(node: any) {
    let data = {
      productID: node.productID,
      parentComment: node.commentId,
      text: this.text.value,
    };

    //console.log(node);
    if (this.text.value !== '') {
      this.clientpublickservice.addCommentReply(data).subscribe({
        next: (success) => {
          this.notify.showSuccess(success.message, 'Success');
          this.getComment();
        },
        error: (err) => {
          console.log(err);
        },
      });
    } else {
    }
    this.text.setValue('');
  }
  //delete
  deleteComment(node: any) {
    this.clientpublickservice.deleteComment(node.commentId).subscribe({
      next: (success) => {
        this.notify.showSuccess(success.message, 'Success');
        this.getComment();
      },
    });
  }
  goLogin() {
    this.router.navigate(['auth']);
  }

  hasChild = (_: number, node: CommentNode) =>
    !!node.children && node.children.length > 0;

  getRoots(commentData: any) {
    var roots = commentData.filter((value: any) => {
      return value.PARENT_COMMENT === null;
    });
    return roots;
  }

  getChildren(commentData: any, commentID: any) {
    var children = commentData.filter((value: any) => {
      return value.PARENT_COMMENT === commentID;
    });
    return children;
  }

  getTree(commentData: any, commentRoot: any) {
    var tree = {
      commentId: commentRoot.COMMENT_ID,
      commentDate: commentRoot.COMMENT_DATE,
      text: commentRoot.TEXT,
      commentor: commentRoot.COMMENTOR,
      productID: commentRoot.COMMENT_PRODUCT_ID,
      parent: commentRoot.PARENT_COMMENT,
      children: [],
    };
    var queue = [];
    queue.push(tree);
    while (queue.length > 0) {
      let node: any;
      node = queue.shift();
      var children = this.getChildren(commentData, node.commentId);
      for (let i = 0; i < children.length; i++) {
        var childObject = {
          commentId: children[i].COMMENT_ID,
          commentDate: children[i].COMMENT_DATE,
          text: children[i].TEXT,
          commentor: children[i].COMMENTOR,
          productID: children[i].COMMENT_PRODUCT_ID,
          parent: children[i].PARENT_COMMENT,
          children: [],
        };
        node.children.push(childObject);
        queue.push(childObject);
      }
    }
    return tree;
  }

  getForest(commentData: any) {
    var forest = [];
    var roots = this.getRoots(commentData);
    for (let i = 0; i < roots.length; i++) {
      forest.push(this.getTree(commentData, roots[i]));
    }
    return forest;
  }
}
