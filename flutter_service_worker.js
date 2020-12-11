'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "7d2d160fb4699f0a9fa41e83a6055c54",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f751d391ab354f236d252d57bf9af3b3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e84ae9fb8bce3aa1880a2bf48d83f696",
".git/logs/refs/heads/main": "e78d7bbe0817eb6b0653ed0f0c7a032c",
".git/logs/refs/remotes/origin/main": "6893d9e30508ff9efdbda0dd300f6a1a",
".git/objects/02/9a4c02f239f252dd0593686079c5cc41565e42": "5fd8b8ac0e2e8426e4fcba761f8b01b1",
".git/objects/04/7af89a56ba10f133c771987ecd68d28cc48236": "b4d78cfc5eb4a00390d85a0efed7b80a",
".git/objects/06/31259c6f26fc2e8e0850ba2d24d7eb1c68ac05": "65363307e25d908419653481dda7c060",
".git/objects/08/37016745040bd3784ac11de818c6d89898624a": "47d321d493016a9918be9f3ea3702ff7",
".git/objects/0a/92efad92875cef376286e2e7fbd800b1fa1548": "67d2bc45d99bc4d0e0c793f3c4027147",
".git/objects/0d/2aaeaaa3e5d385eb98b9ea4e1b57d2f865484b": "ecc0a016fd1382a1c64d6dd053a31414",
".git/objects/0e/2fc1209d1dc1b36c0cd0130196872be42c4a1b": "3267c21797ab6cec246d60ecd79d2ae8",
".git/objects/10/0500b185b13abdc61874e2dab87247c8fa8ff1": "af96e375ed9b94b0e7861aa1bd037ecd",
".git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "b9e902e0488ad9c20b4e1c6698a09098",
".git/objects/16/e145280630f26f79e2a7d5f025d840f8be3c1d": "172c8873fea886d36013f9f6dc31842f",
".git/objects/17/0b60a9b61c40fb10d1a5abd61361e494c3a502": "843cec81e04c998e863c0fb9d7082526",
".git/objects/1c/4236dff616f1bcbdd0fdb5b0dab43cf29ce05b": "f8064696d2ca8a9db9c9040ce5276530",
".git/objects/1f/d882526e657313331b3d036baa166a20576049": "994c70a1e1016545144fdaa3d8422312",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/22/f5c48807e70ee592dadcb5f436cb19630a9b0a": "2eb7ef0992e253b06ddd9415a54ede04",
".git/objects/2b/a14047312399fc486217ee26f346180e21a111": "8da6534a0f61528a07127b5b9d79a83b",
".git/objects/2f/12263cced7e28c7406eb185f297793a3a3cb55": "08b5aa4a0b5aa6bd4778c9af341d830e",
".git/objects/33/eba8b192384487f04951539f13bf1f8dd9f9cb": "8b147483b254a82db0bcaf9f71cd7f6b",
".git/objects/34/4dfee7cb0268e87526f43606101d66451e79e3": "f08fdbbe85bc2a027accd38f71f5bb0d",
".git/objects/34/5c639fc52cda6b78b60fb7eaa379276ab95a39": "81365cd73159695aaff2be83e106bd39",
".git/objects/35/8d3640f4c93f84744faacae8d03abc2d5425e3": "5a25e5108e917164a96f7ca343add843",
".git/objects/38/67a506574a5445194e0ee6130b534b37265871": "88c047e6b4e9f75033c40acbd94d76c5",
".git/objects/3c/1235920b6c2e5c14644e40b35492b7ed8cb884": "927f5fdd043dc254c474c626a32a5642",
".git/objects/3f/ed7e8180932cfbf39157d44cf2a2684a5d66a8": "c697d67d85307b5a783d22ee7909a198",
".git/objects/40/82d7e462bedae7f6b4ffe91b4e6368df50a56d": "aeb38b71b5788becf6b615bb4c3b7c30",
".git/objects/41/4329afa3aa205bad8697859d39bef067c845df": "b94f554f9f330a920887d8ff09a4fe2d",
".git/objects/41/a8edae19b28e90265587328e230529dc9776ea": "9f7d11a63fca9853714fb5aaa1797b1d",
".git/objects/45/24f67e190b2631780cd388f24eab6ea7f5bfe7": "ffcf75ff45940899ae9f3defb494114f",
".git/objects/49/2721ad7dd3aaf8cd06285fd9bad5552d712801": "bff93714d638b05ac2fcc71e9771edae",
".git/objects/4c/1ef22d577f0f6b5a3229a619d5e5fcc14930d2": "3ca18bd6fe180b74eadb07cf2809ff32",
".git/objects/4e/8661c8c06f2777a462dca9a4ed6f3f423e2c3f": "db94fdc1ad7b67f34b85b2407b2823a1",
".git/objects/50/01c94143e73f6a70e96ff61bb34260510958c1": "d15bc712241469c0c0122881a2bfd0c2",
".git/objects/51/a4d04cc7bb0983601fa00154fe2de03fc56a29": "e974bac76df830aaf8ffa1cf2735e3f7",
".git/objects/56/5dff4c80d383516be69d52d130885bf4fb6c19": "f0ce59089794f1791c2d709d6a10f6f3",
".git/objects/57/3eb6672edc13fe5299c4cbf9590a106726aa30": "799e64638a5a3b50010d7741a82a142e",
".git/objects/58/3f427be3e07d4537630e5b7687abfafa859de8": "03d4896e5e5f5c005533847c28bc01ea",
".git/objects/5c/ab0f911f7e40e0eca1beb326b692371771bfc7": "f13ac1651d3dea7713a6860abf1338b4",
".git/objects/5f/f6f06610bfeb294a75de65b5f548a69ee7f0db": "ce9af9b962467139c5c99a39fde1e1ee",
".git/objects/5f/ff927a2fbe881169bd1fbc19da6fe03ab0a0cc": "694f0e067c917dcc9f59ba5473e2bce0",
".git/objects/61/0cdda13b3821857482b88255541924e1b29c4f": "4542f928b1107f1330fe9042b4019f15",
".git/objects/64/e177890f5a5dab073548bc5a459b39156a20ae": "10e59fd524f5bcb7e8fb806465abdb8b",
".git/objects/65/59f3991bc6dd6a846f6bf2831e68e5b2b827c4": "b2c903320a24b53029c4a40be617ce2d",
".git/objects/69/4e9dae9ce481bcad26b2ad68cf8617cb2e4bb6": "f962498222d95a7c877d965b4dc6d5e4",
".git/objects/6d/66c02390f87f85a303d7e3eb7730030ef4a49f": "76a1b0b7f688596c8e321b0449131659",
".git/objects/6d/cbb092e59059d98550361cf0aefa91cba95eb6": "db698121300cea3f2e34ba27d1d25649",
".git/objects/70/2bfe8ec4e58c0a6b97ec1a298e20cc0498bd47": "63878c4c06719d0f68330d89720a20a5",
".git/objects/72/3952f265806fa328559022d7bed2fda679f3ed": "76f20d3eb3107751c2c4d923dd7187f7",
".git/objects/78/079bda27b9ad67d0d000158c29424b4d83ab59": "fafd9f7d34e8a1dfa4fa14f0973366b1",
".git/objects/78/8ff90d84811cf85ecee3758d0c65ccb54695ee": "84b78e0d5ceda5d67646f7e9e7f0220d",
".git/objects/7f/7d478f0a9d667178c7590a79a481e2ebe303d0": "8f5dcf8588d901c2e19d07e57fa86656",
".git/objects/87/e4207b52a5ad10cde4e37af10b4afe315a6204": "6b78456289262e14642e6f116017ac51",
".git/objects/88/b3c412e2db810aa712fb7aa16b69a25ca2f341": "282c6c928f18e76518d309e3f9d91d3a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/08110c1004dbddf20a93bc4c3a7ab5e1391d0c": "42d224dd6a6aae74f6d62f980ba7b15a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/deff5ea551b9e23ccc3c66d6dc47e26511f26f": "363741343aa216a768c56274709cebbb",
".git/objects/8f/0e35479c08d665e04c303376de5887231530d3": "11d38fe7799509edde9461f253c71b46",
".git/objects/8f/93fd4d04e2d715a0e26ea44441d5f27b3b6af5": "192cb6c025e5b517b0165cd520cb67f7",
".git/objects/8f/c5736757ff2a06fb2e127fac0a9086d96d2c80": "2bc6882da47ed584ec608aad9432c9ca",
".git/objects/90/3240511892210ecc0e33f0797e8feff17d9ce9": "ea472f78793847080c3469d3ab50cd12",
".git/objects/90/8210f5354412cc8d3e2ee6ef5968442112d97b": "076ec833ee89380da61ae7c290bbac18",
".git/objects/91/e89529c4b7e4d0cd63aeb0f44bd9d30c41b30f": "6ed8d9f622c39bf3495a94135e9a11dd",
".git/objects/93/7b33bd85c3c4e7f92ff054110c82537b8ef9a2": "a72ad9ead703d9793f28b02c155d2f6a",
".git/objects/94/961d2c7d3c60d3558d6dda31778bfb362ace54": "80e6c238cc17aa6e960f410bfc838050",
".git/objects/94/a08267dad9a6821690b466df37feb7e756e529": "93977bd8d057aff6aac3048360bba45b",
".git/objects/95/a65e4bda7c9c471509008e03573b21cba9d26c": "343f950430cd013d448d22c3e21cd6ce",
".git/objects/9a/08edab6334dc4caa768adf5336fa39febc81e6": "97fca3bb538ee077eba97e2d7934aa30",
".git/objects/9a/38e497cae8beb5d6977602ea13f8e48d636e9c": "d377249abaeb518ff155411788cbcf2d",
".git/objects/9a/ae53de9fe1a341accb4eb098ca65f26015a009": "ef0915bd159d38886540355efed12d86",
".git/objects/9b/244e5b7b1c64601ad7beb73b9a75c29d28a32e": "1eab94225507c903a85019d151ced01a",
".git/objects/9b/ce735cb079b8585177cd663887f8f0d0b77756": "0ec78c6116050866a03b2e79fb641407",
".git/objects/9d/71ba04a2acd29cb1019ce3d31d2b74c7e03640": "31fadc2291b1bba3b25a8bc4ee589888",
".git/objects/9f/c57715134b28337a095d1770cd8e2665166bf1": "e332012bb7e86f098a6d17955c7183e8",
".git/objects/a2/96b46d991f01b0d6c45e3ae0a4ca03accf403f": "3626ab2863797202bfc792872a7bb2b2",
".git/objects/a6/3073fdb9cb981030335e8cb51dbecd35208847": "1d4a980786745f50b497150487300a0f",
".git/objects/a6/31df2d1ca51f29a8585521d0c9a486685b16bc": "348581fb5c497ca9408024559a6b3249",
".git/objects/a6/4e3f57baa3219730c2ea6721f637429de6ff9a": "621e92dd8166a23e47a0da0d2d8297bb",
".git/objects/a6/bf9288fb10eb9d3b6cc3dd19b7a991a60dcf7c": "4d96142703bd9dacb6c20c22bc2336ec",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a8/548392e46ce10bd1627947201262231afa24c4": "8499ef6d2897025d4357819b2f1359e0",
".git/objects/aa/9bafc7013e7e7c761c0a769fea5a77f37bfc7d": "71ed03d2291adfc36fb8434083be6f44",
".git/objects/ab/22d993603c4cab5f9c5ca0fd9fb5cc93ba5471": "db2f38e16754ea3409d1c35965c14739",
".git/objects/af/f78524748cfe6c4fd542bf392cba985351faf9": "6daa7f1d51ed74d3decffc7030d5fe10",
".git/objects/b0/d86434a0e22a6cdcb5344f8208e7653e3cc0d3": "cbe5f4a62e987391b22e7d4aabac3523",
".git/objects/b1/59368db3933a530da00db71aa3c80b7097d4cf": "1faaa40e4db40b44c649440eeb457a3a",
".git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
".git/objects/b3/48f676fbbba1db593f940fe542ef4be22d6c05": "835a8140b317ca4cac2376e0eb359777",
".git/objects/b3/6d5b2a0e4aa37cf551c3c06a38853b7978f174": "270137198bcece43022b379669b9721a",
".git/objects/b4/df38069581420645b676297fac68d07853f186": "ece0b2ede146a4a6ecedb5a8be2f0cc7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/6a690c73eb053e8b0f7f8793c3e2815077b74b": "b344d64259c80586ba1cb181652099ed",
".git/objects/bb/7370a88c03329c5f7eb05c60b30ae39e091a04": "03b34c52ad3fa2e042ac3b15f8143867",
".git/objects/bb/8ecf3eec24510ddbf12f6a02a0b6e4b3ae0249": "76963a63eb6df8a6d9d78966e99c551b",
".git/objects/bc/fcf45e8aa9dee4bfc61f425f521f242c58c559": "0c358b92f7f57670183a2861c893c951",
".git/objects/c3/05ee903d9a7dc7b284bcfa813ac16553bf9b40": "cd104841135876ccf2cf74724eb402f4",
".git/objects/c8/6f2128f8a384a7b036a173203d7859b2e3e722": "2317c0f0e2f765d30ff7cf3753d782c1",
".git/objects/ca/8bf496704dc4f3634a0c2c5e8a48fb353ec304": "3e9fce04bb13a7aae612768a70349802",
".git/objects/cd/8535e7b6134cde4d4f6001d7a0da21d8e2b845": "d938231c1274bd4cf41d55c30710fd54",
".git/objects/cf/1c1abe04547ec9b556ed44a012b7f34c875215": "1065578c3e56d17c1ca55fef841bc49d",
".git/objects/d4/816280f8608e812f3f37dda70dfa51ae2908af": "89d40b7fe80326870432123b2d597ead",
".git/objects/d9/19180d6aee51ed2de9fccfb74991e64ce48e04": "ba3b0613556a626c54b121bcfc46ffa1",
".git/objects/dd/2cd89a1135a6bf2091934788c3345bdd491a59": "7fcde5e3b31e1aea4d36476eee42ee08",
".git/objects/e4/02c56b42fa4f8e47cc77c07fb0818c9a517f9f": "787e55a9356b0e8496d367fc710966b4",
".git/objects/eb/9b6fe8875ce2caa84b47fb48008e453f786d9f": "a6a96f16782290fef6236d4c9b80503f",
".git/objects/ec/bd02dfc3638e98a4828642cf5b7c03b03cd280": "c8cc069a4a20b2084cafd1e500e93c6b",
".git/objects/ee/e4474ec2ffd0a2e7c79fde381e1e7887e29ca8": "4d890d98b3137e24f5b9e0c97fb9ed29",
".git/objects/ef/1374dc329b170e2338eede103d15d99dfa5f8a": "98f6848e3200c1b5e1d1e6e44e84972a",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f7/f11621d892e38a59365b5e68eac72a85209f39": "9044d8eda81561a2e0e8dee16c878434",
".git/objects/fa/212749f7d8f9964bc1469d74a6056c1cb1003f": "6b45f3bc90c20e136fcdbb23beb43843",
".git/objects/fb/c99bac6e16874319257557be09cd0c876c5926": "f2ed8e5abb4cf765608466ec24e6234b",
".git/objects/fe/cb5cdb0a3e0ea1b9a858cecf88ec3ee7703ef2": "53d1807f8b52b16234e9cdc6073caebc",
".git/refs/heads/main": "215588b26e8097c2dc3d25e3720929c1",
".git/refs/remotes/origin/main": "215588b26e8097c2dc3d25e3720929c1",
"assets/AssetManifest.json": "788a4f18bcf97ec27b1380a0ca54a8e6",
"assets/FontManifest.json": "04e96002b616800f8b610f75e80af567",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "5d0c4b9c6836a01d9c622c603262d476",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "831eb40a2d76095849ba4aecd4340f19",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a126c025bab9a1b4d8ac5534af76a208",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d80ca32233940ebadc5ae5372ccd67f9",
"assets/statics/fonts/Lato/Lato-Regular.ttf": "2d36b1a925432bae7f3c53a340868c6e",
"assets/statics/images/add.png": "8bbf9f275b13f6b6c5c2a931d4a760d2",
"assets/statics/images/addmore.png": "ae5055dd2d26aafe2a67d79212a70558",
"assets/statics/images/admin.png": "7a1d916aa1938cffd0788c6ee257f07e",
"assets/statics/images/back.png": "81da71f5aa2252f1f484609fd0d43bb4",
"assets/statics/images/Background@2x.png": "a6acf238b85e6700536e8f4deb3f752a",
"assets/statics/images/bg.png": "08b678813965dab821ba371882d0f56b",
"assets/statics/images/copy.png": "5656e3c3106ced4088ca007653f2da49",
"assets/statics/images/createroom.png": "a41b001cb00c87314c2ca4b7f2158d9d",
"assets/statics/images/cross.png": "35e3a074eef00c3bc6d652147b201357",
"assets/statics/images/enter_room_code.png": "e99943292b86dcad04320653c1f40131",
"assets/statics/images/facebook.png": "563588a9c41d6c8acfb3c77f2f2b8fd2",
"assets/statics/images/google_plus.png": "fc552ea3efd3a81a84231e47b9277a94",
"assets/statics/images/howtoplay.png": "e59a97f96149d70ebc4f82447764245d",
"assets/statics/images/howtoplay_selected.png": "ffceef1793da09ecf83691f9df04d4ba",
"assets/statics/images/icon.png": "1f11514f41ddd91217f5834f72054f77",
"assets/statics/images/icon_selected.png": "3fdd935aeca00ed62494ad5ae64899d3",
"assets/statics/images/image.png": "38a83145b8b629c93f94617ea24746de",
"assets/statics/images/Image_1.png": "e0f150d73152538172a3eeebff761aa9",
"assets/statics/images/image_2.png": "8e159c7cdc1a91dde60867aac7ae7111",
"assets/statics/images/joinroom.png": "09e1547eb52d0eaa8778a4dc93ab68d2",
"assets/statics/images/logo_1.png": "22a45d9ead5df2629ac71bc29582ee37",
"assets/statics/images/logo_5.png": "307ec6ea1153313956c4830795432fff",
"assets/statics/images/logo_blue.png": "a4fef44b3554a328239df1ec56253bfe",
"assets/statics/images/logo_green.png": "b8c4e67ca0da285498c3154be4715aac",
"assets/statics/images/logo_red.png": "3b141185adf5113edac77b7cd2fddce6",
"assets/statics/images/lost%2520game.png": "ba0053699328a68741cf78b36309e551",
"assets/statics/images/minus.png": "e464d6d5259b34fbf46c61f0248920d1",
"assets/statics/images/numbers.png": "775b5814175b62d8f3d55dc36f297ab2",
"assets/statics/images/numbers2.png": "bc0e43be908917269e3269f55121c49f",
"assets/statics/images/option%2520bg.png": "373428b178a3d90a12f20da82ee6ef36",
"assets/statics/images/others.png": "e6b69e91b178f5668eb479a8ee853773",
"assets/statics/images/per.png": "22e2ae26f5a955fc8e9acb632deaed98",
"assets/statics/images/profile.png": "2611ce14ba615a9941d7e4848908aa89",
"assets/statics/images/ques.png": "9c236a47e8cfcfb283323e451eef367c",
"assets/statics/images/Radio_button.png": "d79b6ca7f9525f8736d7063403cf94ac",
"assets/statics/images/Radio_button_selected.png": "febe21e0b9784b76f68038823aa6e770",
"assets/statics/images/Rectangle%252094.png": "d6d27178d604b4c6f26d443154e1de3c",
"assets/statics/images/roomcode.png": "62f00a1b0f52f27f258440f32631e2c8",
"assets/statics/images/sad.png": "f17bc1482ae1213622f9b6f41a4732fd",
"assets/statics/images/selected%2520ques.png": "1f1ccbc9cf1a2db99b90ccaa51288df4",
"assets/statics/images/settings.png": "06cb5ff5a26fb5c5e2615974af3e4282",
"assets/statics/images/settings2.png": "0fc47355960b689fa77e2f57e654b7d8",
"assets/statics/images/share.png": "abff9a6d676edfb60b7ce99e3d440cd1",
"assets/statics/images/sorry_bg.png": "8a7e1980d472338f8bcba7e2016edabf",
"assets/statics/images/Splash.png": "4f93c24c910fb7c8679b358a67ade39e",
"assets/statics/images/team%2520member_bg.png": "049d8251e144653b7f341d6da8b5e648",
"assets/statics/images/team.png": "0006e5b2d863e65462fde13ae865874e",
"assets/statics/images/team_1.png": "f0818bed85862a82322e0fce768f341e",
"assets/statics/images/team_2.png": "8a22deda354d258400722dacd9bfac63",
"assets/statics/images/team_3.png": "0c80609b03ded9d448d6b2fa55abe610",
"assets/statics/images/team_bg.png": "b7358fc1d5ca353f2dceba0f7fc39e97",
"assets/statics/images/winner.png": "9895a828d4721c1172df269fffb6ca53",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "59f1f936c924d59bf2873d8d3d2a4d84",
"/": "59f1f936c924d59bf2873d8d3d2a4d84",
"main.dart.js": "70b436975c3890a37d218baad34e85b7",
"manifest.json": "30dd4543afdc7da65516c97d9e8247d2",
"version.json": "4c673f728674974f5ecaaf2bd1a2bbdc"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
