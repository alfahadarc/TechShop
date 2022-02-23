import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddnewdeliverymanComponent } from './components/admindashboard/deliveryman/addnewdeliveryman/addnewdeliveryman.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { AddnewcategoryComponent } from './components/admindashboard/allcategory/addnewcategory/addnewcategory.component';
import { EditcategoryComponent } from './components/admindashboard/allcategory/editcategory/editcategory.component';
import { AddnewmanufactureComponent } from './components/admindashboard/allmanufacturer/addnewmanufacture/addnewmanufacture.component';
import { EditmanufacturerComponent } from './components/admindashboard/allmanufacturer/editmanufacturer/editmanufacturer.component';
import { AddnewofferComponent } from './components/admindashboard/alloffers/addnewoffer/addnewoffer.component';
import { AlloffersComponent } from './components/admindashboard/alloffers/alloffers.component';
import { EditofferComponent } from './components/admindashboard/alloffers/editoffer/editoffer.component';
import { AddnewproductComponent } from './components/admindashboard/allproducts/addnewproduct/addnewproduct.component';
import { EditproductComponent } from './components/admindashboard/allproducts/editproduct/editproduct.component';
import { SingleproductComponent } from './components/admindashboard/allproducts/singleproduct/singleproduct.component';
import { CartComponent } from './components/client/cart/cart/cart.component';
import { CategoryAllProductsComponent } from './components/client/category-all-products/category-all-products.component';
import { ClientalloffersComponent } from './components/client/clientalloffers/clientalloffers.component';
import { CompareComponent } from './components/client/compare/compare.component';
import { WishlistComponent } from './components/client/wishlist/wishlist.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SearchpageComponent } from './components/homepage/searchbox/searchpage/searchpage.component';
import { IndividualOfferComponent } from './components/individual-offer/individual-offer.component';
import { IndividualProductComponent } from './components/individual-product/individual-product.component';
import { OrderComponent } from './components/order/order.component';
import { SignuploginComponent } from './components/signuplogin/signuplogin.component';
import { AllorderComponent } from './components/order/allorder/allorder.component';
import { ConfirmorderComponent } from './components/order/confirmorder/confirmorder.component';
import { AssemblerComponent } from './components/assembler/assembler.component';
import { AsmblrequestComponent } from './components/admindashboard/asmblrequest/asmblrequest.component';
import { DeliverymanComponent } from './components/admindashboard/deliveryman/deliveryman.component';
import { DeliverymancompoComponent } from './components/deliverymancompo/deliverymancompo.component';
import { AchievementComponent } from './components/client/achievement/achievement.component';
import { ProfileComponent } from './components/client/profile/profile.component';
import { SingleProductassemblerComponent } from './components/assembler/single-productassembler/single-productassembler.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: 'home', component: HomepageComponent },
  { path: 'auth', component: SignuploginComponent },

  { path: 'admindashboard', component: AdmindashboardComponent },
  { path: 'addproduct', component: AddnewproductComponent },
  { path: 'adminsingleproduct', component: SingleproductComponent },
  { path: 'addcategory', component: AddnewcategoryComponent },
  { path: 'addmanufacture', component: AddnewmanufactureComponent },
  { path: 'addperson', component: AddnewdeliverymanComponent }, //this is for add person
  { path: 'editcategory', component: EditcategoryComponent },
  { path: 'editmanufacturer', component: EditmanufacturerComponent },
  { path: 'editproduct/:id', component: EditproductComponent },
  { path: 'products/', component: CategoryAllProductsComponent },
  { path: 'products/:id', component: CategoryAllProductsComponent },
  { path: 'product/:id', component: IndividualProductComponent },
  { path: 'compare', component: CompareComponent },
  { path: 'cartlist', component: CartComponent },
  { path: 'addOffer', component: AddnewofferComponent },
  { path: 'editOffer/:id', component: EditofferComponent },
  { path: 'offer/:id', component: IndividualOfferComponent },
  { path: 'search/:key', component: SearchpageComponent },
  { path: 'alloffers', component: ClientalloffersComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'placeorder', component: OrderComponent },
  { path: 'allorders', component: AllorderComponent },
  { path: 'confirmorder/:id', component: ConfirmorderComponent },
  { path: 'assembler', component: AssemblerComponent },
  { path: 'asmblrequest', component: AsmblrequestComponent },
  { path: 'delivery', component: DeliverymancompoComponent },
  { path: 'achievement', component: AchievementComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'assemleitems/:id', component: SingleProductassemblerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
