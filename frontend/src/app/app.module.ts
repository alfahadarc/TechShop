//Materials
import { MaterialModule } from 'src/app/material/material.module';

import { NgParticlesModule } from 'ng-particles';
import { NgxMaterialRatingModule } from 'ngx-material-rating';
import { RatingModule } from 'ngx-bootstrap/rating';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { SearchboxComponent } from './components/homepage/searchbox/searchbox.component';
import { FeturedcategoryComponent } from './components/homepage/feturedcategory/feturedcategory.component';
import { OffersComponent } from './components/homepage/offers/offers.component';
import { FeturedproductComponent } from './components/homepage/feturedproduct/feturedproduct.component';
import { OffercardComponent } from './components/homepage/offers/offercard/offercard.component';
import { FeturedproductcardComponent } from './components/homepage/feturedproduct/feturedproductcard/feturedproductcard.component';
import { CategoryComponent } from './components/homepage/category/category.component';
import { SignuploginComponent } from './components/signuplogin/signuplogin.component';
import { LoginComponent } from './components/signuplogin/login/login.component';
import { SignupComponent } from './components/signuplogin/signup/signup.component';

import { AuthInterceptor } from './interceptor/auth.interceptor';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { AllproductsComponent } from './components/admindashboard/allproducts/allproducts.component';
import { AllcategoryComponent } from './components/admindashboard/allcategory/allcategory.component';
import { AllmanufacturerComponent } from './components/admindashboard/allmanufacturer/allmanufacturer.component';
import { AddnewproductComponent } from './components/admindashboard/allproducts/addnewproduct/addnewproduct.component';
import { BacktoadmindashboardComponent } from './components/admindashboard/backtoadmindashboard/backtoadmindashboard.component';
import { SingleproductComponent } from './components/admindashboard/allproducts/singleproduct/singleproduct.component';
import { AddnewcategoryComponent } from './components/admindashboard/allcategory/addnewcategory/addnewcategory.component';
import { AddnewmanufactureComponent } from './components/admindashboard/allmanufacturer/addnewmanufacture/addnewmanufacture.component';
import { CategoryAllProductsComponent } from './components/client/category-all-products/category-all-products.component';
import { CategoryProductCardComponent } from './components/client/category-product-card/category-product-card.component';
import { IndividualProductComponent } from './components/individual-product/individual-product.component';
import { AdminheaderComponent } from './components/admindashboard/adminheader/adminheader.component';
import { EditcategoryComponent } from './components/admindashboard/allcategory/editcategory/editcategory.component';
import { EditmanufacturerComponent } from './components/admindashboard/allmanufacturer/editmanufacturer/editmanufacturer.component';
import { EditproductComponent } from './components/admindashboard/allproducts/editproduct/editproduct.component';
import { CompareComponent } from './components/client/compare/compare.component';
import { BacktohomeComponent } from './components/homepage/backtohome/backtohome.component';
import { CompareboxComponent } from './components/client/comparebox/comparebox.component';
import { ItemattributesComponent } from './components/client/compare/itemattributes/itemattributes.component';
import { OtherattributesComponent } from './components/client/compare/otherattributes/otherattributes.component';
import { ImagesComponent } from './components/individual-product/images/images.component';
import { MainattributesComponent } from './components/individual-product/mainattributes/mainattributes.component';
import { NumericattributesComponent } from './components/individual-product/numericattributes/numericattributes.component';
import { GenericattributesComponent } from './components/individual-product/genericattributes/genericattributes.component';
import { ClientheaderComponent } from './components/client/clientheader/clientheader.component';
import { CartComponent } from './components/client/cart/cart/cart.component';
import { CommentandreviewComponent } from './components/client/commentandreview/commentandreview.component';
import { CommentsComponent } from './components/client/comments/comments.component';
import { ReviewsComponent } from './components/client/reviews/reviews.component';
import { AddcommentComponent } from './components/client/comments/addcomment/addcomment.component';
import { AlloffersComponent } from './components/admindashboard/alloffers/alloffers.component';
import { AddnewofferComponent } from './components/admindashboard/alloffers/addnewoffer/addnewoffer.component';
import { EditofferComponent } from './components/admindashboard/alloffers/editoffer/editoffer.component';
import { IndividualOfferComponent } from './components/individual-offer/individual-offer.component';
import { OffermainattributesComponent } from './components/individual-offer/offermainattributes/offermainattributes.component';
import { IncludesCardComponent } from './components/individual-offer/includes-card/includes-card.component';
import { SearchpageComponent } from './components/homepage/searchbox/searchpage/searchpage.component';
import { OfferimageComponent } from './components/individual-offer/offerimage/offerimage.component';
import { ClientalloffersComponent } from './components/client/clientalloffers/clientalloffers.component';
import { TutorialvideoComponent } from './components/client/tutorialvideo/tutorialvideo.component';
import { FooterComponent } from './components/footer/footer.component';
import { WishlistComponent } from './components/client/wishlist/wishlist.component';
import { NotificationsComponent } from './components/client/notifications/notifications.component';
import { MatBadgeModule } from '@angular/material/badge';
import { OrderComponent } from './components/order/order.component';
import { OrderproductcardComponent } from './components/order/orderproductcard/orderproductcard.component';
import { OrderconfirmcardComponent } from './components/order/orderconfirmcard/orderconfirmcard.component';
import { DeliverymanComponent } from './components/admindashboard/deliveryman/deliveryman.component';
import { AddnewdeliverymanComponent } from './components/admindashboard/deliveryman/addnewdeliveryman/addnewdeliveryman.component';
import { AllorderComponent } from './components/order/allorder/allorder.component';
import { ConfirmorderComponent } from './components/order/confirmorder/confirmorder.component';
import { AssemblerComponent } from './components/assembler/assembler.component';
import { CardComponent } from './components/assembler/card/card.component';
import { AsmblrequestComponent } from './components/admindashboard/asmblrequest/asmblrequest.component';
import { AllordercardComponent } from './components/order/allorder/allordercard/allordercard.component';
import { ConfirmOrderProductCardComponent } from './components/order/confirmorder/confirmOrderProductCard/confirm-order-product-card.component';
import { DeliverycardComponent } from './components/deliverymancompo/deliverycard/deliverycard.component';
import { DeliverymancompoComponent } from './components/deliverymancompo/deliverymancompo.component';
import { OrderoffercardComponent } from './components/order/orderoffercard/orderoffercard.component';
import { ConfirmorderoffercardComponent } from './components/order/confirmorder/confirmorderoffercard/confirmorderoffercard.component';
import { FailedcardComponent } from './components/assembler/card/failedcard/failedcard.component';
import { AchievementComponent } from './components/client/achievement/achievement.component';
import { SinglecardComponent } from './components/client/achievement/singlecard/singlecard.component';
import { ProfileComponent } from './components/client/profile/profile.component';
import { SingleProductassemblerComponent } from './components/assembler/single-productassembler/single-productassembler.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    SearchboxComponent,
    FeturedcategoryComponent,
    OffersComponent,
    FeturedproductComponent,
    OffercardComponent,
    FeturedproductcardComponent,
    CategoryComponent,
    SignuploginComponent,
    LoginComponent,
    SignupComponent,
    AdmindashboardComponent,
    AllproductsComponent,
    AllcategoryComponent,
    AllmanufacturerComponent,
    AddnewproductComponent,
    BacktoadmindashboardComponent,
    SingleproductComponent,
    AddnewcategoryComponent,
    AddnewmanufactureComponent,
    CategoryAllProductsComponent,
    CategoryProductCardComponent,
    IndividualProductComponent,
    AdminheaderComponent,
    EditcategoryComponent,
    EditmanufacturerComponent,
    EditproductComponent,
    CompareComponent,
    BacktohomeComponent,
    CompareboxComponent,
    ItemattributesComponent,
    OtherattributesComponent,
    ImagesComponent,
    MainattributesComponent,
    NumericattributesComponent,
    GenericattributesComponent,
    ClientheaderComponent,
    CartComponent,
    CommentandreviewComponent,
    CommentsComponent,
    ReviewsComponent,
    AddcommentComponent,
    AlloffersComponent,
    AddnewofferComponent,
    EditofferComponent,
    IndividualOfferComponent,
    OffermainattributesComponent,
    IncludesCardComponent,
    SearchpageComponent,
    OfferimageComponent,
    ClientalloffersComponent,
    TutorialvideoComponent,
    FooterComponent,
    WishlistComponent,
    NotificationsComponent,
    OrderComponent,
    OrderproductcardComponent,
    OrderconfirmcardComponent,
    DeliverymanComponent,
    AddnewdeliverymanComponent,
    AllorderComponent,
    ConfirmorderComponent,
    AssemblerComponent,
    CardComponent,
    AsmblrequestComponent,
    AllordercardComponent,
    ConfirmOrderProductCardComponent,
    DeliverycardComponent,
    DeliverymancompoComponent,
    OrderoffercardComponent,
    ConfirmorderoffercardComponent,
    FailedcardComponent,
    AchievementComponent,
    SinglecardComponent,
    ProfileComponent,
    SingleProductassemblerComponent,
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgParticlesModule,
    FormsModule,
    NgxMaterialRatingModule,
    RatingModule,
    MatBadgeModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
