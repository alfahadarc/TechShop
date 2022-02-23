import { identifierModuleUrl } from '@angular/compiler';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

// export const baseUrl = environment.production
//   ? 'https://api.job4you.com'
//   : 'http://localhost:8080/api/';

export const proxyUrl = '/api/';

//auth urls
export const loginUrl = proxyUrl + 'auth/login';
export const logoutUrl = proxyUrl + 'auth/logout';
//signup
export const signUpUrl = proxyUrl + 'client/signup';

//admin urls start
export const adminDashboardURL = proxyUrl + 'admindashboard';

//get all things
export const allProductAdminURL = adminDashboardURL + '/allProducts';
export const allCategoryAdminURL = adminDashboardURL + '/allCategories';
export const allManufacturerAdminURL = adminDashboardURL + '/allManufacturers';
//for comparison
export const getNumericComponentsUrl =
  adminDashboardURL + '/allNumericComponents';
export const getNonNumericComponentsUrl =
  adminDashboardURL + '/allDescriptiveComponents';

//add all things
export const addCategoryAdminURL = adminDashboardURL + '/addCategory';
export const addManufacturerAdminURL = adminDashboardURL + '/addManufacturer';
export const addProductAdminURL = adminDashboardURL + '/addProduct';
//edit options
export const updateCategoryUrl = adminDashboardURL + '/updateCategory';

export const updateManufacturerUrl = adminDashboardURL + '/updateManufacturer';
export const updateManufacturerImageUrl =
  adminDashboardURL + '/addManufacturerImage?manufacturerID=';
export const getManufacturerImageUrl =
  adminDashboardURL + '/getManufacturerImage?manufacturerID=';

export const updateProductUrl = adminDashboardURL + '/updateProduct';
export const getSingleProductURl = adminDashboardURL + '/product?productID=';
export const getProductMainImageUrl =
  adminDashboardURL + '/productMainImage?productID=';
export const updateProductMainImageUrl =
  adminDashboardURL + '/addProductMainImage?productID=';

//update video
export const updateVideoProductUrl =
  adminDashboardURL + '/uploadTutorialVideo?productID=';

export const getTutorialVideoUrl =
  adminDashboardURL + '/tutorialVideo?productID=';

//admin urls end

//client start

//get all by category
export const getCategoryProduct =
  proxyUrl + 'client/getCategoryProducts?categoryID=';
//get all categories
export const getClienAllCategoriesUrl = proxyUrl + 'client/allCategories';
//client main image
export const getClientMainImageURL =
  proxyUrl + 'client/getProductMainImage?productID=';
// for comparision
// 1. single product by identifierModuleUrl

export const getClientSingleProductUrl =
  proxyUrl + 'client/getProduct?productID=';
// 2. numeric & descriptive together
export const getClienProductComponentsUrl =
  proxyUrl + 'client/getProductComponents?productID=';

// add to cart

export const getProductCartQuantityUrl =
  proxyUrl + 'client/cartProductQuantity?productID=';
export const addProductToCartUrl = proxyUrl + 'client/addProductToCart';
export const getCartProductsUrl = proxyUrl + 'client/getCartProducts';
//delete from cart
export const deleteFromCartUrl = proxyUrl + 'client/deleteCartItem?itemID=';

//get featured product
export const feturedProductUrl = proxyUrl + 'client/getFeaturedProducts';

//check if logged in or not
export const isLoggedinUrl = proxyUrl + 'client/currentUser';

//get comments
export const getCommentUrl = proxyUrl + 'client/getComments?productID=';
//add comment
export const addCommentUrl = proxyUrl + 'client/addCommentThread';
//comment reply
export const addCommentReplyUrl = proxyUrl + 'client/addCommentReply';
//comment delete
export const deleteCommentUrl = proxyUrl + 'client/deleteComment?commentID=';

//get reviews
export const getReviewsUrl = proxyUrl + 'client/getReviews?productID=';
//add review
export const addReviewUrl = proxyUrl + 'client/addReview';
//delete review
export const deleteReviewUrl = proxyUrl + 'client/deleteReview?productID=';

//add offer
export const addOfferUrl = adminDashboardURL + '/addOffer';

//get all offer
export const getAllOfferUrl = adminDashboardURL + '/allOffers';

//get single offer
export const getSingleOfferUrl = adminDashboardURL + '/getOffer?offerID=';

//get offer include product
export const getOfferIncludedProductUrl =
  adminDashboardURL + '/getOfferProducts?offerID=';

//update only offer not included product

export const updateOnlyOfferUrl = adminDashboardURL + '/updateOffer';

//update offer product
export const updateOfferProductUrl = adminDashboardURL + '/updateOfferProduct';
export const deleteOfferProductUrl = adminDashboardURL + '/deleteOfferProduct?';
export const addOfferProductUrl = adminDashboardURL + '/addOfferProduct';
//update free
export const updateOfferFreeProductUrl =
  adminDashboardURL + '/updateOfferFreeProduct';
export const deleteOfferFreeProductUrl =
  adminDashboardURL + '/deleteOfferFreeProduct?';
export const addOfferFreeProductUrl =
  adminDashboardURL + '/addOfferFreeProduct';

//offer image
export const getOfferMainImageUrl =
  adminDashboardURL + '/offerMainImage?offerID=';
export const uploadOfferImageUrl =
  adminDashboardURL + '/uploadOfferImage?offerID=';

//add offer to cart
export const addOffertoCartUrl = proxyUrl + 'client/addOfferToCart';
//get offer quantity
export const getOfferCartQuantityUrl =
  proxyUrl + 'client/cartOfferQuantity?offerID=';

//client search
export const searchUrl = proxyUrl + 'client/searchItem?searchKey=';

//offer client
export const getClientOfferURl = proxyUrl + 'client/getOffers';
export const getClientSingleOfferUrl = proxyUrl + 'client/getOffer?offerID=';
export const getClientFeaturedOfferUrl = proxyUrl + 'client/getFeaturedOffers';
export const getClientOfferIncludesProductUrl =
  proxyUrl + 'client/getOfferProducts?offerID=';
export const getClientOfferMainImageUrl =
  proxyUrl + 'client/offerMainImage?offerID=';

//get video
export const getClientTutorialVideoUrl =
  proxyUrl + 'client/productTutorialVideo?productID=';

export const getAvgRAttingURl = proxyUrl + 'client/averageRating?productID=';

//add to wishlist
export const addToWishListUrl = proxyUrl + 'client/addItemToWishlist?itemID=';
//get all wishlist
export const getAllWishListUrl = proxyUrl + 'client/getWishlistItems';
//delete wishlist
export const deleteItemFromWishListUrl =
  proxyUrl + 'client/removeItemFromWishlist?itemID=';
//is this item in wishlist
export const isInWishListUrl = proxyUrl + 'client/itemExistInWishlist?itemID=';

//notifications

export const getAllNotificatonsUrl = proxyUrl + 'client/getAllNotifications';
export const unseenNotificationsCountUrl =
  proxyUrl + 'client/getUnseenNotificationCount';
export const setNotificationsSeenUrl =
  proxyUrl + 'client/setNotificationAsSeen?notificationID=';
export const deleteNotificationsUrl =
  proxyUrl + 'client/deleteNotification?notificationID=';

//order
export const getAllDistrictUrl = proxyUrl + 'client/getDistricts';
export const getAllSubDistricUrl =
  proxyUrl + 'client/getSubDistricts?districtID=';

export const addOrderURl = proxyUrl + 'client/placeOrder';
export const confirmOrderPaymentUrl = proxyUrl + 'client/confirmOrderPayment';
export const cancelOrderUrl = proxyUrl + 'client/cancelOrder?orderID=';
export const getAllOrderUrl = proxyUrl + 'client/getOrders';
export const getSingleOrderUrl = proxyUrl + 'client/getOrder?orderID=';
export const getOrderItemsUrl = proxyUrl + 'client/getOrderItems?orderID=';

//assembler

export const getasmblrPendingOrderUrl = proxyUrl + 'assembler/getPendingOrders';
export const asmblrAssembleUrl = proxyUrl + 'assembler/assembleOrder?orderID=';

export const clientTestUrl = proxyUrl + 'client/test';

//assmbl and delivery

//admin

export const getAdminstockReqUrl = adminDashboardURL + '/getStockRequests';
export const resolveAdminstockUrl =
  adminDashboardURL + '/resolveStockRequest?productID=';
export const rejectAdminstockUrl =
  adminDashboardURL + '/rejectStockRequest?productID=';

//asmblr
export const getAsmblSingleProductstockReqUrl =
  proxyUrl + 'assembler/getStockRequest?productID=';
export const addAsmblStockReqUrl = proxyUrl + 'assembler/addStockRequest';

//delivery man
export const getDeliverymanOrderUrl = proxyUrl + 'deliveryMan/getOrders';
export const getSubDistrictUrl =
  proxyUrl + 'deliveryMan/getSubDistrict?subDistrictID=';
export const takeDeliveryUrl = proxyUrl + 'deliveryMan/takeDelivery?orderID=';
export const changeCurrentSubDistrictUrl =
  proxyUrl + 'deliveryMan/changeCurrentSubDistrict';
export const markAsDeliveredUrl =
  proxyUrl + 'deliveryMan/markAsDelivered?orderID=';

//admin add employee
export const addEmployeeUrl = adminDashboardURL + '/addemployee';
export const getAllEmployeeUrl = adminDashboardURL + '/getemployee';

//client profile
export const getProfileUrl = proxyUrl + 'client/getprofile';
export const updateProfileUrl = proxyUrl + 'client/updateProfile';

//achivments

export const getAllAchivementsUrl = proxyUrl + 'client/getAchievements';
export const getRewardPointsUrl = proxyUrl + 'client/getRewardPoints';
export const claimAchivmentsUrl = proxyUrl + 'client/claimAchievement?title=';

//assembler
export const getasmblOrderitemsUrl =
  proxyUrl + 'assembler/getOrderItems?orderID=';

//get id from notification
export const idfromnotificationUrl =
  proxyUrl + 'client/getProductIDFromNotification?notificationID=';
