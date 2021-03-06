import config from 'src/config';
const url = config.IS_DEV;
let apiUrl = url + '/';
export default {
  auth: apiUrl + 'authenticate',
  authUser: apiUrl + 'authenticate/user',
  authRefresh: apiUrl + 'authenticate/refresh',
  authInvalidate: apiUrl + 'authenticate/invalidate',
  accountRetrieve: apiUrl + 'accounts/retrieve',
  accountUpdate: apiUrl + 'accounts/update',
  accountCreate: apiUrl + 'accounts/create',
  notificationsRetrieve: apiUrl + 'notifications/retrieve',
  notificationUpdate: apiUrl + 'notifications/update',
  accountProfileCreate: apiUrl + 'account_profiles/create',
  accountProfileUpdate: apiUrl + 'account_profiles/update',
  accountInformationRetrieve: apiUrl + 'account_informations/retrieve',
  accountInformationUpdate: apiUrl + 'account_informations/update',
  emailAlert: apiUrl + 'emails/alert',
  locationCreate:apiUrl + 'locations/create',
  locationRetrieve:apiUrl + 'locations/retrieve',
  locationDelete:apiUrl+'locations/delete',
  // messenger
  customMessengerGroupCreate: apiUrl + 'custom_messenger_groups/create',
  messengerGroupRetrieve: apiUrl + 'messenger_groups/retrieve',
  messengerGroupRetrieveByParams: apiUrl + 'messenger_groups/retrieve_by_params',
  messengerMessagesCreate: apiUrl + 'messenger_messages/create',
  messengerMessagesRetrieve: apiUrl + 'messenger_messages/retrieve',
  messengerMessagesUpdate: apiUrl + 'messenger_messages/update_by_status',
  mmCreateWithImageWithoutPayload: apiUrl + 'messenger_messages/create_with_image_without_payload',
  imageUploadUnLink: apiUrl + 'images/upload_un_link',
  // referral
  invitationCreate: apiUrl + 'invitations/create',
  invitationRetrieve: apiUrl + 'invitations/retrieve',
  // images
  imageUpload: apiUrl + 'images/upload',
  imageRetrieve: apiUrl + 'images/retrieve',
  // carts
  cartsCreate: apiUrl + 'carts/create',
  cartsRetrieve: apiUrl + 'carts/retrieve',
  cartsDelete: apiUrl + 'carts/delete',
  cartsUpdate: apiUrl + 'carts/update',
  // coupons
  couponsRetrieve: apiUrl + 'coupons/retrieve',
  // products
  productsRetrieve: apiUrl + 'products/retrieve_basic',
  // dashboard
  dashboardRetrieveCategoryList: apiUrl + 'dashboard/categories',
  dashboardRetrieveFeaturedProducts: apiUrl + 'dashboard/featured',
  dashboardRetrieveCategoryProducts: apiUrl + 'dashboard/category',
  dashboardRetrieveShops: apiUrl + 'dashboard/shops_in_array',
  merchantRetrieve: apiUrl + 'merchants/retrieve',
  // checkout || orders
  checkoutCreate: apiUrl + 'checkouts/create',
  ordersRetrieve: apiUrl + 'checkouts/retrieve_orders',
  orderItemsRetrieve: apiUrl + 'checkout_items/retrieve_on_orders',
  shippingFee: apiUrl + 'checkouts/get_shipping_fee',
  // notification settings
  notificationSettingsRetrieve: apiUrl + 'notification_settings/retrieve',
  filters:apiUrl + 'dashboard/categories',
  // ratings
  ratingsCreate: apiUrl + 'ratings/create',
  ratingsRetrieve: apiUrl + 'ratings/retrieve',
  // valid-id
  getValidID:apiUrl+'payloads/get_valid_id',
  uploadValidID:apiUrl+'payloads/upload_valid_id'
}