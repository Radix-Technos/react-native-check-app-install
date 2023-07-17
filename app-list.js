export const APP_LIST = {
    "whatsapp": {pkgName: "com.whatsapp", urlScheme: "whatsapp", urlParams: "app"}, // fa
    "whatsapp business": {pkgName: "com.whatsapp.w4b", urlScheme: "", urlParams: ""}, // fa
    "facebook": {pkgName: "com.facebook.katana", urlScheme: "fb", urlParams: "requests"}, // fa: facebook-official
    "facebook messenger": {pkgName: "com.facebook.orca", urlScheme: "fb-messenger", urlParams: "user-thread/{user-id}"}, // fa: facebook
    "messenger": {pkgName: "com.facebook.orca", urlScheme: "fb-messenger", urlParams: "user-thread/{user-id}"}, // fa: facebook
    "skype": {pkgName: "com.skype.raider", urlScheme: "skype", urlParams: "echo123?call"}, // fa
    "wechat": {pkgName: "com.tencent.mm", urlScheme: "weixin", urlParams: "dl/chat"}, // fa
    "snapchat": {pkgName: "com.snapchat.android", urlScheme: "snapchat", urlParams: "?u=foo"}, // fa
    "twitter": {pkgName: "com.twitter.android", urlScheme: "twitter", urlParams: "messages"}, // fa
    "youtube": {pkgName: "com.google.android.youtube", urlScheme: "youtube", urlParams: "watch?v=dQw4w9WgXcQ"}, // fa
    "netflix": {pkgName: "com.netflix.mediaclient", urlScheme: "nflx", urlParams: ""}, 
    "instagram": {pkgName: "com.instagram.android", urlScheme: "instagram", urlParams: "app"}, // fa
    "spotify": {pkgName: "com.spotify.mobile.android.ui", urlScheme: "spotify", urlParams: "http://open.spotify.com/artist/12Chz98pHFMPJEknJQMWvI"}, // fa 
    "slack": {pkgName: "com.Slack", urlScheme: "slack", urlParams: "open"}, // fa
    //"hipchat": {pkgName: "com.hipchat", urlScheme: "hipchat", urlParams: "companyname/lobby"},
    "pinterest": {pkgName: "com.pinterest", urlScheme: "pinterest", urlParams: "pin/285063851385287883/"}, // fa
    "uber": {pkgName: "com.ubercab", urlScheme: "uber", urlParams: ""},
    "amazon": {pkgName: "com.amazon.mShop.android.shopping", urlScheme: "amazon", urlParams: "content/item?id=B007Q4OVHQ"}, // fa
    "soundcloud": {pkgName: "com.soundcloud.android", urlScheme: "soundcloud", urlParams: "tracks/63085864"}, // fa
    "google maps": {pkgName: "com.google.android.apps.maps", urlScheme: "comgooglemaps", urlParams: "?center=40.765819,-73.975866&zoom=14&views=traffic"}, // fa: map-marker
    "chrome": {pkgName: "com.android.chrome", urlScheme: "googlechrome", urlParams: "github.com"}, // fa
    "gmail": {pkgName: "com.google.android.gm", urlScheme: "googlegmail", urlParams: "co?subject=foo&body=bar"}, // fa: envelope-open
    "google drive": {pkgName: "com.google.android.apps.docs", urlScheme: "googledrive", urlParams: ""}, // fa: database
    "dropbox": {pkgName: "com.dropbox.android", urlScheme: "xxx", urlParams: ""}, // fa
    "google hangouts": {pkgName: "com.google.android.talk", urlScheme: "com.google.hangouts", urlParams: ""}, // fa: phone
    "evernote": {pkgName: "com.evernote", urlScheme: "evernote", urlParams: "root"},
    // "threema": {pkgName: "ch.threema.app", urlScheme: "threema", urlParams: "add?id=ECHOECHO"}, // fa: lock
    "vlc": {pkgName: "org.videolan.vlc", urlScheme: "vlc", urlParams: ""}, 
    "tumblr": {pkgName: "com.tumblr", urlScheme: "tumblr", urlParams: "x-callback-url/dashboard"}, // fa
    "flickr": {pkgName: "com.yahoo.mobile.client.android.flickr", urlScheme: "flickr", urlParams: ""}, // fa
    "linkedin": {pkgName: "com.linkedin.android", urlScheme: "linkedin", urlParams: ""},
    "google": { pkgName: "com.google.android.googlequicksearchbox", urlScheme: "google", urlParams: "" },
    "outlook": { pkgName: "com.microsoft.office.outlook", urlScheme: "outlook", urlParams: "" },
    "telegram": { pkgName: "org.telegram.messenger", urlScheme: "telegram", urlParams: "" },
    "prime": { pkgName: "com.amazon.avod.thirdpartyclien", urlScheme: "prime", urlParams: "" },
    "youtube music": { pkgName: "com.google.android.apps.youtube.music", urlScheme: "", urlParams: "" },
    "tiktok": { pkgName: "com.zhiliaoapp.musically", urlScheme: "", urlParams: "" },
    "google meet": { pkgName: "com.google.android.apps.meetings", urlScheme: "", urlParams: "" },
    "teams": { pkgName: "com.microsoft.teams", urlScheme: "", urlParams: "" },
    "aliexpress": { pkgName: "com.alibaba.aliexpresshd", urlScheme: "", urlParams: "" },
    "shopee": { pkgName: "com.shopee.br", urlScheme: "", urlParams: "" },
    "taxi 99": { pkgName: "com.taxis99", urlScheme: "", urlParams: "" },
    "99 taxi": { pkgName: "com.taxis99", urlScheme: "", urlParams: "" },
    "uber eats": { pkgName: "com.ubercab.eats", urlScheme: "", urlParams: "" },
    "ifood": { pkgName: "br.com.brainweb.ifood", urlScheme: "", urlParams: "" },
    "rappi": { pkgName: "com.grability.rappi", urlScheme: "", urlParams: "" },
    "mercado livre": { pkgName: "com.mercadolibre", urlScheme: "", urlParams: "" },
    "magalu": { pkgName: "com.luizalabs.mlapp", urlScheme: "", urlParams: "" },
    "enjoei": { pkgName: "br.com.enjoei.app", urlScheme: "", urlParams: "" },
    "americanas": { pkgName: "com.b2w.americanas", urlScheme: "", urlParams: "" },
    "yahoo": { pkgName: "com.yahoo.mobile.client.android.mail", urlScheme: "", urlParams: "" },
    "alarm" : { pkgName: "com.google.android.deskclock", urlScheme: "", urlParams: "" },
    "banco do brasil" : { pkgName: "br.com.bb.android", urlScheme: "", urlParams: "" },
    "banco inter" : { pkgName: "br.com.intermedium", urlScheme: "", urlParams: "" },
    "bradesco" : { pkgName: "com.bradesco", urlScheme: "", urlParams: "" },
    "caixa econômica" : { pkgName: "br.com.gabba.Caixa", urlScheme: "", urlParams: "" },
    "call" : { pkgName: "com.google.android.dialer", urlScheme: "", urlParams: "" },
    "correios" : { pkgName: "br.com.correios.preatendimento", urlScheme: "", urlParams: "" },
    "google calendar" : { pkgName: "com.google.android.calendar", urlScheme: "", urlParams: "" },
    "google task" : { pkgName: "com.google.android.apps.tasks", urlScheme: "", urlParams: "" },
    "itau" : { pkgName: "com.itau", urlScheme: "", urlParams: "" },
    "microsoft to do" : { pkgName: "com.microsoft.todos", urlScheme: "", urlParams: "" },
    "mormaii smartwatches" : { pkgName: "br.com.grupotechnos.mormaiismartwatches", urlScheme: "", urlParams: "" },
    "neon" : { pkgName: "br.com.neon", urlScheme: "", urlParams: "" },
    "next" : { pkgName: "br.com.bradesco.next", urlScheme: "", urlParams: "" },
    "nubank" : { pkgName: "com.nu.production", urlScheme: "", urlParams: "" },
    "santander" : { pkgName: "com.santander.app", urlScheme: "", urlParams: "" },
    "shein" : { pkgName: "com.zzkko", urlScheme: "", urlParams: "" },
    "ticktick" : { pkgName: "com.ticktick.task", urlScheme: "", urlParams: "" },
    "todoist" : { pkgName: "com.todoist", urlScheme: "", urlParams: "" },
};