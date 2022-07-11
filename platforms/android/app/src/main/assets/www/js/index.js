var app = {
  // Application Constructor
  initialize: function () {
    document.addEventListener(
      "deviceready",
      this.onDeviceReady.bind(this),
      false
    );
    document.addEventListener(
      "onCleverTapProfileSync",
      this.onCleverTapProfileSync,
      false
    );
    document.addEventListener(
      "onCleverTapProfileDidInitialize",
      this.onCleverTapProfileDidInitialize,
      false
    );
    document.addEventListener(
      "onCleverTapInAppNotificationDismissed",
      this.onCleverTapInAppNotificationDismissed,
      false
    );
    // deeplink handler
    document.addEventListener("onDeepLink", this.onDeepLink, false);
    //push notification handler
    document.addEventListener(
      "onPushNotification",
      this.onPushNotification,
      false
    );
    document.addEventListener(
      "onCleverTapInboxDidInitialize",
      this.onCleverTapInboxDidInitialize,
      false
    );
    document.addEventListener(
      "onCleverTapInboxMessagesDidUpdate",
      this.onCleverTapInboxMessagesDidUpdate,
      false
    );
    document.addEventListener(
      "onCleverTapInboxButtonClick",
      this.onCleverTapInboxButtonClick,
      false
    );
    document.addEventListener(
      "onCleverTapInAppButtonClick",
      this.onCleverTapInAppButtonClick,
      false
    );
    document.addEventListener(
      "onCleverTapFeatureFlagsDidUpdate",
      this.onCleverTapFeatureFlagsDidUpdate,
      false
    );
    document.addEventListener(
      "onCleverTapProductConfigDidInitialize",
      this.onCleverTapProductConfigDidInitialize,
      false
    );
    document.addEventListener(
      "onCleverTapProductConfigDidFetch",
      this.onCleverTapProductConfigDidFetch,
      false
    );
    document.addEventListener(
      "onCleverTapProductConfigDidActivate",
      this.onCleverTapProductConfigDidActivate,
      false
    );
    document.addEventListener(
      "onCleverTapExperimentsUpdated",
      this.onCleverTapExperimentsUpdated,
      false
    );
    document.addEventListener(
      "onCleverTapDisplayUnitsLoaded",
      this.onCleverTapDisplayUnitsLoaded,
      false
    );
    document.addEventListener(
      "onCleverTapPushNotificationTappedWithCustomExtras",
      this.onCleverTapPushNotificationTappedWithCustomExtras,
      false
    );
    document.addEventListener(
      "onCleverTapPushAmpPayloadDidReceived",
      this.onCleverTapPushAmpPayloadDidReceived,
      false
    );
    //karthikfuns
    document.getElementById("eventbtn").addEventListener("click", this.pushEvent);
    document.getElementById("pushprofilebtn").addEventListener("click", this.pushProfileEvent);
    document.getElementById("pushnotibtn").addEventListener("click", this.pushNotiEvent);
    document.getElementById("inappbtn").addEventListener("click", this.inApp);
    document.getElementById("appinboxbtn").addEventListener("click", this.appInbox);
    document.getElementById("nativedisplaybtn").addEventListener("click", this.nativeDisplay);
  },

  pushEvent: function () {
    CleverTap.recordEventWithName("ProductC Event");
    alert("Push event pushed!");
  },
  pushProfileEvent: function () {
    CleverTap.profileSet({"DOB":"22-04-1994"});
    alert("Push Profile event pushed!");
  },
  pushNotiEvent: function () {
    CleverTap.recordEventWithName("Karthiks Noti Event");
    alert("Notification Push event pushed!");
  },
  inApp: function () {
    CleverTap.recordEventWithName("Karthiks InApp Event");
    alert("InApp event pushed!");
  },
  appInbox: function () {
    CleverTap.recordEventWithName("Karthiks App Inbox Event");
    this.onCleverTapInboxDidInitialize();
    alert("App Inbox event pushed!");
  },
  nativeDisplay: function () {
    CleverTap.recordEventWithName("Karthiks Native Display Event");
    alert("Native Display event pushed!");
    this.onCleverTapDisplayUnitsLoaded;
  },

  onDeviceReady: function () {
    this.receivedEvent("deviceready");

    CleverTap.onUserLogin({
      Name: "Karthik Iyer",
      Identity: "kkcord",
      Phone: 3333333333,
      Email: "karthikcordova@test.com",
      Gender: "M",
      "MSG-push": true,
      DOB: "22-04-1994",
    });


    CleverTap.setDebugLevel(3);

    CleverTap.createNotificationChannel("testkk123", "Hey", "desc", 5, true);

    CleverTap.initializeInbox();
  },

  onCleverTapProfileSync: function (e) {
    console.log(e.updates);
  },

  onCleverTapProfileDidInitialize: function (e) {
    console.log(e.CleverTapID);
  },

  onCleverTapInAppNotificationDismissed: function (e) {
    console.log(e.extras);
    console.log(e.actionExtras);
  },

  onCleverTapPushNotificationTappedWithCustomExtras: function (e) {
    console.log("onCleverTapPushNotificationTappedWithCustomExtras");
    console.log(e.customExtras);
  },

  // deep link handling
  onDeepLink: function (e) {
    console.log(e.deeplink);
  },

  // push notification payload handling
  onPushNotification: function (e) {
    console.log(e.notification);
  },

  onCleverTapInboxDidInitialize: function () {
    CleverTap.showInbox({
      navBarTitle: "My App Inbox",
      tabs: ["tag1", "tag2"],
      navBarColor: "#FF0000",
    });
    CleverTap.getAllInboxMessages(function (val) {
     console.log("Inbox messages are " + val);
    });
  },

  onCleverTapInboxMessagesDidUpdate: function () {
    CleverTap.getInboxMessageUnreadCount(function (val) {
      console.log("Inbox unread message count" + val);
    });
    CleverTap.getInboxMessageCount(function (val) {
      console.log("Inbox read message count" + val);
    });
  },

  onCleverTapInAppButtonClick: function (e) {
    console.log("onCleverTapInAppButtonClick");
    console.log(e.customExtras);
  },

  onCleverTapInboxButtonClick: function (e) {
    console.log("onCleverTapInboxButtonClick");
    console.log(e.customExtras);
  },

  onCleverTapFeatureFlagsDidUpdate: function () {
    console.log("onCleverTapFeatureFlagsDidUpdate");
  },

  onCleverTapProductConfigDidInitialize: function () {
    console.log("onCleverTapProductConfigDidInitialize");
  },

  onCleverTapProductConfigDidFetch: function () {
    console.log("onCleverTapProductConfigDidFetch");
  },

  onCleverTapProductConfigDidActivate: function () {
    console.log("onCleverTapProductConfigDidActivate");
  },

  onCleverTapExperimentsUpdated: function () {
    console.log("onCleverTapExperimentsUpdated");
  },

  onCleverTapDisplayUnitsLoaded: function (e) {
//    console.log("onCleverTapDisplayUnitsLoaded");
    console.log(e.units);
//    CleverTap.getDisplayUnitForId("1643287671_20220215",function(val) {console.log("Native Display unit is "+JSON.stringify(val));});
    CleverTap.getAllDisplayUnits(function(val) {
        console.log("Native Display units are "+JSON.stringify(val));
        document.getElementById("nativeDisplayTitle").innerHTML = JSON.stringify(val[0].content[0].title.text).replace(/['"]+/g, ' ');
        document.getElementById("nativeDisplayMessage").innerHTML = JSON.stringify(val[0].content[0].message.text).replace(/['"]+/g, ' ');
        console.log("Native Display units title "+JSON.stringify(val[0].content[0].title.text))
        console.log("Native Display units Message "+JSON.stringify(val[0].content[0].message.text))
    });
  },
  onCleverTapPushNotificationTappedWithCustomExtras: function (e) {
    console.log("onCleverTapPushNotificationTappedWithCustomExtras");
    console.log(e.customExtras);
    alert(e.customExtras);
  },

  onCleverTapPushAmpPayloadDidReceived: function (e) {
    console.log("onCleverTapPushAmpPayloadDidReceived");
    console.log(e.customExtras);
  },

  // Update DOM on a Received Event
  receivedEvent: function (id) {
    var parentElement = document.getElementById(id);
    var listeningElement = parentElement.querySelector(".listening");
    var receivedElement = parentElement.querySelector(".received");

    listeningElement.setAttribute("style", "display:none;");
    receivedElement.setAttribute("style", "display:block;");

    console.log("Received Event: " + id);
  },
};

app.initialize();
