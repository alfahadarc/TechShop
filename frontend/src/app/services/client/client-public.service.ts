import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  getClientMainImageURL,
  getCategoryProduct,
  getClienAllCategoriesUrl,
  getClientSingleProductUrl,
  getClienProductComponentsUrl,
  feturedProductUrl,
  isLoggedinUrl,
  getCommentUrl,
  addCommentUrl,
  addCommentReplyUrl,
  signUpUrl,
  deleteCommentUrl,
  getReviewsUrl,
  addReviewUrl,
  deleteReviewUrl,
  searchUrl,
  getClientFeaturedOfferUrl,
  getClientSingleOfferUrl,
  getClientOfferIncludesProductUrl,
  getClientOfferMainImageUrl,
  getClientOfferURl,
  getClientTutorialVideoUrl,
  addToWishListUrl,
  getAllWishListUrl,
  deleteItemFromWishListUrl,
  isInWishListUrl,
  getAllNotificatonsUrl,
  unseenNotificationsCountUrl,
  setNotificationsSeenUrl,
  deleteNotificationsUrl,
  getAvgRAttingURl,
  clientTestUrl,
  getProfileUrl,
  updateProfileUrl,
  getAllAchivementsUrl,
  getRewardPointsUrl,
  claimAchivmentsUrl,
  idfromnotificationUrl,
} from 'src/app/config/api';

@Injectable({
  providedIn: 'root',
})
export class ClientPublicService {
  constructor(private http: HttpClient) {}

  signup(data: any): Observable<any> {
    return this.http.post(signUpUrl, data);
  }

  categoryName: any;
  setCategoryName(val: any) {
    this.categoryName = val;
  }

  getCategoryName() {
    return this.categoryName;
  }

  products: any;
  setCategoryProductFromHome(val: any) {
    this.products = val;
  }
  getCategoryProductFromHome() {
    return this.products;
  }

  getCategoryProduct(id: any): Observable<any> {
    return this.http.get(getCategoryProduct + id);
  }

  SingleProduct: any;
  setProduct(val: any) {
    this.SingleProduct = val;
  }
  getProduct() {
    return this.SingleProduct;
  }

  //image
  getPhoto(id: any): Observable<any> {
    return this.http.get(getClientMainImageURL + id, { responseType: 'blob' });
  }
  getAllCategories(): Observable<any> {
    return this.http.get(getClienAllCategoriesUrl);
  }

  //single product
  getSingleProduct(id: any): Observable<any> {
    return this.http.get(getClientSingleProductUrl + id);
  }
  //single product numeric and non numeric
  getProductComponets(id: any): Observable<any> {
    return this.http.get(getClienProductComponentsUrl + id);
  }
  //get avg ratting
  getAvgRatting(id: any): Observable<any> {
    return this.http.get(getAvgRAttingURl + id);
  }
  //fetured product
  getFeaturedProduct(): Observable<any> {
    return this.http.get(feturedProductUrl);
  }
  //is Logged in
  isLoggedin(): Observable<any> {
    return this.http.get(isLoggedinUrl);
  }

  //get all comments
  getAllComments(id: any): Observable<any> {
    return this.http.get(getCommentUrl + id);
  }

  //send comment
  addComment(data: any): Observable<any> {
    return this.http.post(addCommentUrl, data);
  }
  //commentReply
  addCommentReply(data: any): Observable<any> {
    return this.http.post(addCommentReplyUrl, data);
  }
  //comment delete
  deleteComment(id: any): Observable<any> {
    return this.http.delete(deleteCommentUrl + id);
  }

  //get review
  getReviews(id: any): Observable<any> {
    return this.http.get(getReviewsUrl + id);
  }

  //add review
  addReview(data: any): Observable<any> {
    return this.http.post(addReviewUrl, data);
  }

  //delete review
  deleteReview(id: any): Observable<any> {
    return this.http.delete(deleteReviewUrl + id);
  }

  //search
  serch(key: any): Observable<any> {
    return this.http.get(searchUrl + key);
  }

  //get all offer
  getFeaturedOffer(): Observable<any> {
    return this.http.get(getClientFeaturedOfferUrl);
  }
  //get single offer
  getSingleOffer(id: any): Observable<any> {
    return this.http.get(getClientSingleOfferUrl + id);
  }
  //get included product in offer
  getIncludesProduct(id: any): Observable<any> {
    return this.http.get(getClientOfferIncludesProductUrl + id);
  }

  //get offer image
  getOfferMainImage(id: any): Observable<any> {
    return this.http.get(getClientOfferMainImageUrl + id, {
      responseType: 'blob',
    });
  }

  getAllOffer(): Observable<any> {
    return this.http.get(getClientOfferURl);
  }

  //
  getTutorialVideoClient(id: any): Observable<any> {
    return this.http.get(getClientTutorialVideoUrl + id, {
      responseType: 'blob',
    });
  }

  //wish list

  addItemToWishList(id: any): Observable<any> {
    return this.http.post(addToWishListUrl + id, null);
  }

  getFullWishList(): Observable<any> {
    return this.http.get(getAllWishListUrl);
  }

  deleteItemFromWishList(id: any): Observable<any> {
    return this.http.delete(deleteItemFromWishListUrl + id);
  }

  isInWishList(id: any): Observable<any> {
    return this.http.get(isInWishListUrl + id);
  }

  //notifications

  getAllNotifications(): Observable<any> {
    return this.http.get(getAllNotificatonsUrl);
  }
  getUnseenNotifications(): Observable<any> {
    return this.http.get(unseenNotificationsCountUrl);
  }
  setSeenNotification(id: any): Observable<any> {
    return this.http.put(setNotificationsSeenUrl + id, null);
  }
  deleteNotification(id: any): Observable<any> {
    return this.http.delete(deleteNotificationsUrl + id);
  }

  getIdFromNotification(id: any): Observable<any> {
    return this.http.get(idfromnotificationUrl + id);
  }

  clientTest(): Observable<any> {
    return this.http.get(clientTestUrl);
  }

  getProfile(): Observable<any> {
    return this.http.get(getProfileUrl);
  }
  updateProfile(data: any): Observable<any> {
    return this.http.put(updateProfileUrl, data);
  }

  getAllAchivement(): Observable<any> {
    return this.http.get(getAllAchivementsUrl);
  }
  getRewardPoint(): Observable<any> {
    return this.http.get(getRewardPointsUrl);
  }
  claimAchivment(title: any): Observable<any> {
    return this.http.put(claimAchivmentsUrl + title, null);
  }
}
