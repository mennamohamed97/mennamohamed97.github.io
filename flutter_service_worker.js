'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8afe0353d49541c03ad5b8a8dd8e6318",
".git/config": "04113af3bbad7fe172af272ac1e890d4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "88589f505d2eb294fa698d475cb54253",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e196914c2ac4590185939591abe1f545",
".git/logs/refs/heads/main": "2c99daa2ba5dfe20c65802192910a492",
".git/logs/refs/remotes/origin/main": "3ac040fd26cb884ca4b6c7458f829e5f",
".git/objects/00/84943c80858dd1060e467615c392b5e5f7a5bb": "48d2b5ae68448358d54e3be04bf7430d",
".git/objects/05/4456d61842c131e1a80c894545a0b5d8bc6eae": "5102b27a6f969447eeb8714ddd030c9a",
".git/objects/05/a6537841cd87494363ff4534e3c80b573dc982": "bdb51e2cd5c4581b6d138de85f28e2f0",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/0a/6f5b8f8946f1d9b8b6dadfb0d518d3602d156d": "3a7987e12573e03aa4e8369c1dceddb9",
".git/objects/0c/237d5d42020b63e10e3da0342c2a3ce5291f57": "c51dcc8e007c5adebfe6fe5d0abb1034",
".git/objects/0d/400dbd76b4ec81f401adfd6e9e09a11cc14762": "b410c2f1aa43aa7e626474c8f5e8f9c9",
".git/objects/0e/294650af657e0b769cc9290157f026779caaa1": "1a62dfa779fa9fe8be9716212898c5f1",
".git/objects/0e/3f6cdfde7d906cb65a9652c22a3f80b32f0c90": "e7aa9f09b56026e94b5855ce78e728fb",
".git/objects/0e/9a32c17ca7ecebcab6d3d822553faf324688b2": "233f1992c416e4d72e385683c4081b59",
".git/objects/10/74a19307363a7c33eda2aa0e1f1f35a80bc4bb": "89036226c23ffc6603f634a22cbf8a63",
".git/objects/14/3569fde6377aeb4f9ce14ad1f5c2e2330578a5": "5a32c1c051d38b6970a0516e73f648d4",
".git/objects/15/62ef74b6a84010668431f554c48cf63fb1190e": "c5abf2c000cba7b5473f4b4b6c3749b9",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/17/c4e51205ecef110c24335accf83ca2ba6f07f9": "4ee94512fb6f12403b407e395fab2c61",
".git/objects/18/4a5593f2608de6b15e95755691b0ec58b5989d": "fc370a017940e15d70473c0ee8aba8f6",
".git/objects/18/67ed8692a762244e7736cff04010174b920e14": "22dcc17313e6ae02b63f64f66537e0aa",
".git/objects/18/a990ee36a023741fff601a184446a706cf1001": "38d4f9819b2d6e2384dca343678fbb32",
".git/objects/18/bbfcfffa55fbfea9bf5ad93122cd34b68b800a": "4a18163d84db2bd62344947bdcfa6a8e",
".git/objects/1a/b40577ae4385f8e8bc79f6ca8ca7210385d403": "772fb8dffc7791925c297fb8fa28cba5",
".git/objects/1b/ccb3d07bfc77df8c08bacda9b2e97733ae08af": "eaedbcd714adee7aee97c3f0b7131f5d",
".git/objects/1c/610955c2c0946305bf9823897b5e9763d9c5e0": "86bae001258bd26b594e8a666f38c7de",
".git/objects/1d/6a611d4eb317f2c665c0f0f5054d26c54e09cc": "24abb19e6f5186b32d00cf27c3e69a2f",
".git/objects/1e/2e92321d7278fbc566a5d6897c5acd0f441982": "47a7bfa8d6f48bc08f9a4639d48f4c41",
".git/objects/1e/53824870abbe9b7e3d0655877df425cedb66b3": "0c4eaffcf53f8c266a61ad71c369a631",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/21/b0218f363911996f33026d907405dc9f3f16f6": "c213f84f5289680aacbcb35e02734d0d",
".git/objects/22/9f41408e416317d3ec8631e5e3416464bfc5dd": "b8951cff42f114bb47a42854460f2dff",
".git/objects/22/feb4c88aa2d3a62b86080b67cb0a90fcf04ad5": "4610ed83fe2b5853d909eac40642c136",
".git/objects/24/f15b472780a1dad4bb3a4200517768a5ae2e4c": "c206b8a29d7412b6d625f5c7ffd6d082",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/29/8453661b390dc49bfba1847fbee771bd57f52a": "ad90c5b869d0d174d2f9a3289df9c872",
".git/objects/2a/b022196b0fad3910d38ae050ab6814be931799": "effb58727f53792624b2dede6a94285d",
".git/objects/2c/14fc2039c66bfe48a6d34cf5d5b5e8bfbd54c9": "d470f9402d9de3d137c892d98f8a3ef3",
".git/objects/2c/e3819b79ec225ed6610d95a127d262d48370ee": "5b6072e4128a2f60ef647ca4c5e27de8",
".git/objects/2c/f6f6fe6bb9c46dd8d567d6a19e6f621f091219": "dec0395a8bfd579b51bb40d2f5f3d84b",
".git/objects/2d/078fa4987056b01c761f8f40dab99a5fb6e05c": "7d99d877aa861e09b652d4e974ee48a2",
".git/objects/31/73a7022bec14837615d1f56293415356426493": "a790804c6fa6e2b265f7fa5888aad9e2",
".git/objects/34/e824a2a0f4efb71f6f4a3c5c14c2867f625776": "d02ddd875c098085c72618f0295d15d8",
".git/objects/3b/22542cc73ab3827ac4679acdeb424fcb427256": "8d62a64b2fb5c4d4b9083fcc2149f466",
".git/objects/3c/9658cfd20dfef98e3a3a482ac4586652b268ce": "0cf9c387b481d1a9072ae8e7ce499bbb",
".git/objects/3d/8dea7d82e425ba78c749e96a79e44cff0b645e": "c531c3f8e590178c4bc1daa54d15c92c",
".git/objects/3f/5a7ad352d386d2c0848e48de28e8788384205d": "f559cf53f732f47e1529b16bf05f8f7d",
".git/objects/45/b142b758370edaa81aec4aa5bd89825bfb28be": "2b5dbdbd93873329f6a9ec76575eae08",
".git/objects/45/c49160f7855e675b645d5414467690de5b7ece": "8acd9e6530690ee6b1feecb3b4d61e88",
".git/objects/46/203996d3943540d81e516dc03e54ed112aec36": "92f0c5d2d370b0d8748fc85b4c9fb64c",
".git/objects/49/03bd170ab8624df56775395ce684d9a2acfdf6": "bbe8b9f14a1880e0f43284e2a8208781",
".git/objects/49/85a888bc5a064f043ec282e58441797a40bced": "c1ce4e740591e7cd59bacd0ea6b38be9",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4a/b6f9abe3ae30a9c3396f865bc15eab28786446": "751b9bcb28e5b11fc16fea280adf09ce",
".git/objects/4f/28e1937337b6573280dbff0fd9cdf234742b4c": "aebd457c19982495d4b402ed80674faa",
".git/objects/4f/89bb5eb3c490cbc836800b3256b61787ca1f5a": "bc9ccd787f838e055dca47e9a7d8490e",
".git/objects/51/5ee8c32c0c0879e8af22b65622f083219f0517": "4e1c00bb7e1a576c7f013e1feee5f7a3",
".git/objects/51/7899743413e09713ddd433ea9106aec940fdec": "07022907df84110d5796ebc10010615f",
".git/objects/52/896f461139823daf687cc35421b4042e303fbc": "63a42eee682858c78a1735754a5479b4",
".git/objects/53/ff783639531f4d6725910e8887873f8758e554": "92b51c6984ff4fa7c326e81e057b83ec",
".git/objects/55/8773544c069f75d1a4de782af7853361d91bb7": "a36875c488dede1bad56090feeb7b322",
".git/objects/55/a4d2919d4ba61b16b8cbbc101bd5780ee4d70c": "736046c9daf3aac7d9d0a00336c68241",
".git/objects/55/c7595edf1f5b78fcc25f5582bcc0756af39ec4": "7450acebe73be167f74eaae96d565061",
".git/objects/59/26b0bffb4e0dc37ae33f74c3231095520efee4": "fca8585bcae1105b11531d3c33c05841",
".git/objects/5a/710451324b166f6b01bad21a56f3560e536807": "98a4f56b412c3a5f734f74cdaa336446",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5b/e40151e856f6d15b3f772cf5cdd780d1e69c5e": "7091f8c8a9701f04371bb07b649c98c7",
".git/objects/5d/f4f0b9c1ce69244b4a4d9a071c5d0b5ef473e2": "6609ad83e56825d199a8a6457f29500d",
".git/objects/60/034fc10a3a91be17d2b34bcbb13bad72955a89": "e4e78160e75ca0fdbf5c88f5b2839328",
".git/objects/61/336712bda10520320cffe02e23dd45b38b6803": "8630571185f2d0815b8c747ca36930a8",
".git/objects/61/342d8f7dd3f1f9b52f66da0edbcb2806166a7c": "4e97a605cdcc7e4b1df3e99036a9ea83",
".git/objects/62/b287ee0907e85e32592ec654950c26947a2238": "10d4b7413f81d387e0f24a75fc8a99c0",
".git/objects/63/69e887a8d9f02598fcbe9fcd661d7474b733cb": "b605d213dc0b657e107154f5a9003b11",
".git/objects/64/38b7b580e502e718a571dfa0a54236d8502227": "041252e18830541fcdfdbed6d45a1df6",
".git/objects/6b/9d8408991a0508eb6051c6255fff7bbb7be9c1": "81f2f39c7db328781cf4d9fb5ffe338c",
".git/objects/6d/02739db4c1e9cdcf50a14d1f729222cf20fe32": "2a0a73a4f2e07f2475b11be199b7dd62",
".git/objects/6d/78dd31c9e65ef3b505a8e7b25d590470043fd0": "9b0e9ff4431c156d3a1f9646ba85b059",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/70/977281f0776b0416ba68ff73c0d4c9f86eada4": "577148f02647a5b08d23861b3f21f605",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/72/dd4d90c416cbc81445f53faf069afe536ac0d1": "a650823ea7595e7b7e97aa4d8523f48c",
".git/objects/75/83587539527e6fd6f214748d16edfcf5dfc7f4": "57959988a1a428f200393f48bf352ed1",
".git/objects/75/d662808549ebaa06a1c75886894b0eb6c67856": "6385d4d60e1e47d034fbcc786e46f771",
".git/objects/78/764c9713bd7cc21a918e9662f41fd24cf41c20": "4da50943f372d8e86c38d372b164f888",
".git/objects/78/cd8ddbcbe0c16415469008fd45336670f4158d": "d09966bcf41c6b0d1c67c7a10e8e7407",
".git/objects/7a/ded775b3351a5557bbb22e57b5f85a21d07d60": "c735727bdad5050acff92b61e3448862",
".git/objects/7c/5bae61754a28c9a716d696de3cd171e860a20b": "d45c396385db8feab253261ccba4b23e",
".git/objects/7c/8fe1d397aa0e79f2fe94063bbde04754da5258": "dbc9685670c48b8cb0f2b0666d8d2e56",
".git/objects/7f/800d63661813792bf870285f7bd4f41298c1da": "fcf63bdf9516d4163c5d6f3831ff43f9",
".git/objects/80/78ddd6c888a8130011a336b048ec95b53d95f4": "9c45dcec8de81ec5a2dea78f0ebd17fe",
".git/objects/81/0154c6e9786e59e839680bf0db08471c236d77": "f76c3ec8de4409827c20c7a2f66f90fd",
".git/objects/81/b00c2e9abea9a012dd7356813735c20bade097": "8839e4f897bd48e900e78d70aa4e3c90",
".git/objects/84/831ca764fc2c0d9ac4b9378215ad03e08dd3a6": "0f71e3bee8707d43bd45222080f2290b",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/85/7b019d391f2169311d01f3816c213bfc4d00a3": "c8a9d5e3ddbb28a6ed515522997d11c2",
".git/objects/86/304e5344aa246411d59753756aa3f1539cda21": "5bd93536bb1422664110f4f3e00b1b1e",
".git/objects/87/dc5d8ceabbd3227eab5f24ac01975dd2ed174d": "86deb45fd2f6d6375c93ed5a4ba4a43a",
".git/objects/88/6e0529a87ef035c85e0237242ed6f21c4bb62d": "f0489865cb8d30a84e0eec0892354128",
".git/objects/88/acfab71b02a088826c466acc6f198d13c1eae9": "a647c414bc37c8517442d1e17a78fee3",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/fc80bb86efd52372f1f248597d797fd815a73c": "df9855d384e0372c4e1dd000505f11c8",
".git/objects/89/4485f3649285b3bfb6475cde7ab2da69ca1f4b": "4b96c9f622895e8d753e70431fc4e4d6",
".git/objects/8d/3e40a5af131d83197345a8a96c88f05b3ae00d": "18f28c6bc0c0086f0a9b563efe16b0d7",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/8d/ea56092bdb2e1e8a888108bd56660b4093cb07": "a4f47818e44fea888dfca9cd76c9034a",
".git/objects/8e/5836001e6692c9d57c930e6ba1b56d8d896b73": "0d284dcfe4a042ca4467e480d6ee15ce",
".git/objects/90/23dafd7387cb1cfc3bd6e4d7a11f46bda4385a": "84a50a61dc4ca189616936eb67c715fb",
".git/objects/91/148704d4a53059ffd6ebf11a623e005c25f23e": "c2a4f09fa9bfb7ddf78d5b2176a4fda7",
".git/objects/91/6aee56e0866799a527134849b2c6306c5d77d3": "51957d958577e4e427744f822f191ff5",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/95/f170e6175b15a1c3b22b98ab9f174039dbc953": "29ae85aba537458a3616b3bf552ab07d",
".git/objects/97/8692767c55027c06ea8afdf2d0580905f9701e": "c268b1e682491a833eb2be4b64dda74a",
".git/objects/97/89215bc226d7c788585e4fa7f10ad554404a36": "0643fb21e6902387f55563c8cf958ac6",
".git/objects/98/4f85ca724f69f4f4686f4d3702a06052df3614": "753622706886793bb4b9196602be6644",
".git/objects/98/59d736baf0a65633f531db1d08ee19cd4a3822": "df838afd0f1fa1acfc93231f5a606acb",
".git/objects/9b/e4693604ca231ac694bb8eac9153ea1310604e": "0db9e4ad830adab4c0b8f085e161f442",
".git/objects/9c/a387e195eb4161c486b05a1e2547c7595dd4f6": "658cc38cd411fc5ad22688ce0e635135",
".git/objects/9d/6373c87c96e47b89707b741c7188cd7c56b20f": "6239a0aaa9d1125af83f56a9ee7d187d",
".git/objects/9e/b2d975f9e16bee22f27a76591ef07481234cab": "ad357eca7ac772993bbc5e0eb83a5de5",
".git/objects/9f/168779f592896fcb4a0e2b8fecb258e67ee7d6": "7a1dce3b77787cf8ea779db8a570d5f5",
".git/objects/a1/9e87d329995172059f0203cbc55b48bc2c2a4c": "c2b61872243e93901e8aca67a6ad04ce",
".git/objects/a2/1ad78551bbe3def94467cbca30cb7205c3cc7d": "72257cd14f3f0f0e1fc6f73c2e1e35bb",
".git/objects/a2/1b4995409888cb2d32fc5826c29ca06d322a8a": "493c3cdf029164ed42bfc951f3d2124d",
".git/objects/a3/3b58bc7dae0f8fa02261a1ee0675868d726494": "5fb3573ee5ffc54e7029df0df7d606c4",
".git/objects/a3/ad6c2ad316e3c0ab5ebf614cfb32477325ed4f": "9cd47b4fabd27e21d3597952ffdf3a28",
".git/objects/a4/f9c430f65fbaa9cd613d6af5a54410cccfa41d": "76b7e4842c40fee5030964a88b5e3d28",
".git/objects/a5/54600e9dbdc65b35b04c6128ee5f85a4ccac9b": "5dce0493dda4fed9d92fc43a92b321d3",
".git/objects/a6/e8ad87b1b125da124478c0a90c14ac11fe0b2e": "b5d64495d39b20f00573c29904cc1510",
".git/objects/a6/f9b22d0407c2b4242106a36278ef1422047d96": "6a0d0b1985d2c68b2efb14f403245d7d",
".git/objects/a8/015ab221156365b2f7dc4921cd17bb923ea0c3": "8ac0519f937ecb77e64e2d2cf43c07ed",
".git/objects/a8/132273be67e54122058f61ca52de7e6b5d1ae8": "07ab40519040feca84fc98ba94ad57f9",
".git/objects/a8/2865eb86b95d6e8f5c220708debcc0ba5d341e": "d54759c64db9b3d227ad442e2ed7f806",
".git/objects/a8/2c4d1da2913d8a0634c3d190c6a4e1e8af559d": "c6f755451d1ff94f6a329f5329c7ba6d",
".git/objects/a8/a1f5571f66276e256167120a13f41d3c3f0509": "d823a802183d26f9de9478abfb76609c",
".git/objects/a9/2a3ca22da547ff6709122611163069b8fdfdef": "7e8e4d1c766191e6815d0506ddc97e96",
".git/objects/a9/757f64d3ca3144ffb1c60a1929146a4376f88f": "abb430c949628182610a0963b1a289e0",
".git/objects/a9/7f791bafce1d579ce2a0dd7fb424542166cc03": "353090a715200c41141eb46ecb2cd8ff",
".git/objects/aa/34def359d3e788a3473a4369b4dd775ff16dc7": "9780208abfcf7b366d39dc11c5077794",
".git/objects/ab/25cb621d6826c08fbcc2c0a917449a4e39f898": "abc44d841342e072d08eec7af485e4a5",
".git/objects/ac/81b49e3ecbb7280024555da24a6b1f2b6bb3d9": "4098a97b8f4548cbb6a36bb1a135edd7",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b2/707f2f200600ea9cf1ec00d1af56ba369d1f61": "6772e849627a82cbf77f754ee59bb5d5",
".git/objects/b3/fa0d575f53decf0614b3b72acc704dd34d92dd": "903205dbcda01fa9fd95e096ab14b16f",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b6/98d11b5ea5a05954f094d5c467cddb86e62dd8": "ee3144b64aea80d3d82e8819b20c3df5",
".git/objects/b6/b1b67455264c49507f2414b058fcf2087dd79c": "7b5113c1f0bd4a954e9af39f765e4166",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/0efadfd3b29e71449fe720b0d503d3a71e78fc": "1e1acdc2ff3aebde051a6ce6c0c9315c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/4d47f3af31505f3cfcba533da52b881b6a1b33": "ab777130815383dc41d27318b6ffbe0e",
".git/objects/ba/34ae9b9b8bd2eefa489fb0b596051286f75799": "02b4768fcb549ff5a3654690e1fa0e1b",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/ae3c41e05f7a9c30eb8cdd4c2070bddb57f4a2": "b7c1d7e4d4da6910905c39455998166b",
".git/objects/bc/37f0ba446ac9ed3420c506a844542f0a7995b2": "15abf60658578ffd6cc4f57d0f78b48f",
".git/objects/bc/7d9e691c16adaf34d89abec45c327b4a596da5": "3fc46d15ccf44ab1f9d321780e75e3ff",
".git/objects/bc/9a22ae1f363e83bc5fe0d585892797141923e8": "9a3977bf7e005c14d2668975faef4467",
".git/objects/be/06e7fdca57d8fc360647d7b7a6a0c7b2da7e26": "bae1db93c8ff34b5d96b8a5eaf24771a",
".git/objects/be/c341208d9e72bca54895028f466fca231d3921": "8a90c1f6d25a5cad6b9125f5e8c465b6",
".git/objects/be/c85e732413bab0380d79c3fe3865a6f447a6ee": "aa2617377f41e037da748b6fc684c18a",
".git/objects/c0/33087f41942e7d67d7aeadf07ac22d5009a40b": "81d16fc8e62b52b04a205a45c5b31deb",
".git/objects/c0/a0304f0309b335c8e0718e57782b848b41258a": "63deefab1e2fe61a91e35e5e0897debd",
".git/objects/c0/f13969d60c653f14ee9485c0da33f494f785d1": "1c6bf65962f8adff11b5ba212f01375d",
".git/objects/c1/ebb86f7620675d7a34b2502c880f800c001e1e": "55aa0287dfdb6fb87f56d121e2ff7880",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/cb/11964e5c53890d84ad78252f1e3e7b76c426f3": "9aab2f2fb1990e527c3505407182e8cf",
".git/objects/cd/30bcb13f256eee767f358f032a11862e363a1e": "e217bbd3f070f17830410dfaed3f4501",
".git/objects/ce/a50bdd9b1be27a93da947cd08c3f256e430be4": "07f819e0ee7c10456026c0e4a4a0edf6",
".git/objects/ce/a9906cd5298876e0f6f3d5a8783299e42ed457": "526268a36d5b3ef6732dda2fd85b32fc",
".git/objects/d3/d9104ad077e83f6cb44808c1baaf8082759a96": "dcc2988109f06b63a27aebbfe7055c75",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/269bd981b66191003ef876d7a47d1c371bf737": "0cf44c349a8f5c77df7f5c33ceaf7a5d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/be6894723b37079b987963fba04379d4f52c58": "5f4f28930910fd1d0616a5ce4085c1db",
".git/objects/d9/ac46c68c7ce1c1a78adfde45862ff20a866cb3": "896f275372a200ce28f46fc470bd5083",
".git/objects/da/bf7c242e938c49fccd0cba88dc2fdccb2f65ee": "bbf7d12e4139b11a89628b8be2fcfda5",
".git/objects/da/cb1515219ab976c09b166b3a856a2c9dd2e50c": "f80c3de5980572fb0c4bcefb79d12301",
".git/objects/db/0524f9d6b6adf8da3afcc8463e55f9ebe48a43": "027c7fca707853f86224202a837d85ef",
".git/objects/db/d23409d3b0df0ef50c2cccbb32dadcc8a9304d": "7bba7f28c9134f225d3d1672d42863d1",
".git/objects/df/21f52eeea10091bb740c7ec4105f4ec9824dca": "94ac4b5dd320a89c4fdb71d39519da0f",
".git/objects/df/8eeaa5f4292d709870e9c19ced78fa7755eca5": "dfa82d0797461d72dfc748075ae8cd26",
".git/objects/df/ff34fd22c7dab2995fc4fa8d629b223ab5d982": "20f94277926b42930935cae0f026ad03",
".git/objects/e3/be7103e4ae891b599b71f6d74f2ae6eb279296": "7c5ab308e6fd4126fe8eaf47cb910ef6",
".git/objects/e3/e5f36d93c1aee41771ea879697cd0956394123": "542db598b9f0b5319835198f9b033fbb",
".git/objects/e6/b0276766dab6cb8cbc8c3ae5e51448cb03ef78": "1962890796c7cce9c917ee64f665a3cf",
".git/objects/e7/2b260a250419f0162377584d9a0c724e04df56": "db914e433f0659aff7415a4bd5b4f09e",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e8/8fe20649a46dd4fa2edff3575b1b3bed0082c0": "f574a122ec08fdd7563931ad93986ba2",
".git/objects/e8/c30630797079c32d226b54d7ee9d4c458ae6bd": "762586306484e3d453f20d1594a44414",
".git/objects/e9/0e87ed69a7ebb8d965ec248fb86286423f103f": "4abcf8c77330fc7fd658318fc2374d78",
".git/objects/eb/85aa9a9ef62dc27505e537ec9a4fc2bee78609": "daf93b99719f0bf5ae7218ae3a5d0415",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/c66139ff89dc8e39fc4d54e1db94f991c8bd05": "c580770d7a7082114a986627a4a12528",
".git/objects/ef/f31ea4a14198fefedeabebd06dc69d2ff9b607": "0cac6e4b9dca68d99e4f32e857dfcf15",
".git/objects/f1/68ce47a71fc9952466e555f3be868c01b96e51": "05bda203d54292ba31c776ed3b1cac10",
".git/objects/f1/9f251a4d3e1d373fcf8a38bfc9629f56ccc4b0": "4fe7163012d46c6ffbeafdf14385c240",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/2c986a351feab0c72934475a9998c41c7cb17c": "c10024dcd7f7e140d3caf7e2acc1bea9",
".git/objects/f5/3619d50c751017a2fafaf5e112ddaab8887e9d": "0abb8092baf3c59756e13b66946a157c",
".git/objects/f5/711ad3946bd87ec2a759f3c78fd63ba3228dfc": "329c534250950e230fb79a4daeb6cbfd",
".git/objects/f6/5b291817fa4d9efb5e23546337a1e0f5f3016f": "afdc169ce891dfab55f0e9bf710e75e1",
".git/objects/f6/fc7dea8b12f2517d635aaa63cc3eb5d6283054": "7924fc2478c2be1327681e56f7d6275f",
".git/objects/f8/b014b9d960a6493422427bc99793f98c937e44": "a7f795855a5db37a72b2ca16cce9ad91",
".git/objects/f9/402a2120e62f57bb243d7d68039bda23cf8c9a": "de6da2de5a207786d4f07bd215a99b7b",
".git/objects/f9/711b1758b0a95b4e433439365c057f9d69e007": "9ef9c64dfd07f1b2969ebfa736059ec4",
".git/objects/fb/9e098402b8004bc9f2a9bd669dd12d30d802c1": "5a9d2d5f490f364bd88d1cf110267126",
".git/refs/heads/main": "6b77bf0219c1383560c92310cb286bed",
".git/refs/remotes/origin/main": "6b77bf0219c1383560c92310cb286bed",
"assets/AssetManifest.bin": "6b28032d7956732ade7e64505bd15da6",
"assets/AssetManifest.bin.json": "718d70335b58553160b0907e486feca1",
"assets/AssetManifest.json": "0576ace1307b47ca81c3818b32123472",
"assets/assets/fonts/montserrat/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/fonts/poppins/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/assets/fonts/poppins/Poppins-Italic.ttf": "5e956c44060a7b3c0e39819ae390ab15",
"assets/assets/fonts/poppins/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/assets/fonts/poppins/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/assets/fonts/poppins/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/assets/fonts/poppins/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/assets/gif/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"assets/assets/icons/android.svg": "a5edf188314ff37a4f513eaccb8d546b",
"assets/assets/icons/apple.svg": "6be40eb4dcaeafda971f070ef687ac8e",
"assets/assets/icons/concept.svg": "1d2ab33390f87572191ab36a2f4912cd",
"assets/assets/icons/contact.png": "e3b1aca81c02dd72dfd9a842c5512a82",
"assets/assets/icons/dark.png": "34b9b410330efc014dac0df01b222a9e",
"assets/assets/icons/database.svg": "af66f234a398197845eac15cc5bfe961",
"assets/assets/icons/design.svg": "b9c1d12b86f6f5a1b1d564b6403b177f",
"assets/assets/icons/dev.svg": "b14707ec638fce2d61ee308153066dd1",
"assets/assets/icons/experience.png": "1ca4fc99b3f6fdfbe8ffb675051ce7a1",
"assets/assets/icons/extra.svg": "3fb07c94f8a4146abb2f266a9e5b229f",
"assets/assets/icons/firebase.svg": "3ced6c61938442b659f67eb57247fbfa",
"assets/assets/icons/home.png": "8848d51a04d7f272187ec179f7def64a",
"assets/assets/icons/light.png": "e9912f4715e49b9933978c2adcaafe0f",
"assets/assets/icons/map.svg": "b1e04382dab1ba99ac4fb9595e21bec8",
"assets/assets/icons/mobile&web.svg": "a52728da45f566090d7b296297c533f6",
"assets/assets/icons/project.png": "fe02d5cd0c46dd85e8caa850bf6c154b",
"assets/assets/icons/skill.png": "938ab509e9d4b0a807004779a561e5c7",
"assets/assets/icons/state.svg": "f79db439a4f4ab26642706b01276444b",
"assets/assets/icons/storage.svg": "81d33565398c7a0820e9f478c4d87582",
"assets/assets/icons/test.svg": "464bb0814d1417ab36ee64d7c91569d4",
"assets/assets/icons/website.svg": "9cd94a52a52a97e7c48dff52a4b4eb1d",
"assets/assets/imgs/3.png": "a11e6389fc6bfbd21fda3984ac366f66",
"assets/assets/imgs/aug/1.jpg": "4ecfedca80997107b96cde7c809021ea",
"assets/assets/imgs/aug/2.jpg": "139d84b8bf75d918bdd0330b6a08a0d1",
"assets/assets/imgs/aug/3.jpg": "0bdb8e960172111feab6db285f3e927a",
"assets/assets/imgs/aug/4.jpg": "cc76efffb4113f2b72a35d6c4b8f1cd3",
"assets/assets/imgs/aug/5.jpg": "474e0790e9ea188f65edde356a8bf6eb",
"assets/assets/imgs/aug/6.jpg": "ee359744d4ee472f3e93269127af277a",
"assets/assets/imgs/aug/aug.png": "d63c3b399fa11a2dead7521466ed20e9",
"assets/assets/imgs/aug/logo.png": "3bb8697dd5eb6bc41c458418c8ec791c",
"assets/assets/imgs/chat/1.jpg": "2956408334fa6325ba2fd8995e9cd24c",
"assets/assets/imgs/chat/2.jpg": "b751181433a2493bc6aa4973b030c681",
"assets/assets/imgs/chat/3.jpg": "4d50a843174b9cbf391487a67e3ba6ab",
"assets/assets/imgs/chat/4.jpg": "4db2950de11e045e25b615ab9f48b046",
"assets/assets/imgs/chat/5.jpg": "40efb8bd905c576c9ffe331b6c543624",
"assets/assets/imgs/chat/6.jpg": "d24c8390b3c7b849b3ccabdb933f5a29",
"assets/assets/imgs/chat/chat.png": "ecabe615d50e0c257425bf9c6358a2cd",
"assets/assets/imgs/chat/logo.png": "1096dd6fb7b8c74baf503a854e875c27",
"assets/assets/imgs/chatAuthFirebase/1.jpeg": "d13a140cfb10d12ba74888ff967cf135",
"assets/assets/imgs/chatAuthFirebase/2.jpeg": "067bacede1f68ab7320e20cf24e44b35",
"assets/assets/imgs/chatAuthFirebase/3.jpeg": "8261bae34cef89dec8b86563ce564041",
"assets/assets/imgs/chatAuthFirebase/4.jpg": "9224e832e6f84dc537897f34127e367f",
"assets/assets/imgs/chatAuthFirebase/5.jpg": "d997037f755f61a6b6056c33ac02014b",
"assets/assets/imgs/chatAuthFirebase/6.jpeg": "7c01469f8174da7fd2091a7bdd0288b8",
"assets/assets/imgs/chatAuthFirebase/chatAuthFirebase.png": "ba06fb766a7b104b78ec0908777afbdb",
"assets/assets/imgs/chatAuthFirebase/logo.png": "fa6f08a7d9e09aa13727bc7a943e4996",
"assets/assets/imgs/coffee/1.jpg": "3cfc295429cf006905e1dba4e690aeac",
"assets/assets/imgs/coffee/2.jpg": "fd99a4b604009e3f855058ee210d16e4",
"assets/assets/imgs/coffee/3.jpg": "9371aa9af1dbb670930f3f64f417917d",
"assets/assets/imgs/coffee/4.jpg": "c60fe0d9a8843bec7a2ca551af8e565d",
"assets/assets/imgs/coffee/5.jpg": "e2db6007fb64fa9a0f98343a82a12efa",
"assets/assets/imgs/coffee/6.jpg": "da1d0f9de282efa20ad630829757764e",
"assets/assets/imgs/coffee/coffee.png": "583df8fbcd46e2d51e4cffdf8a5f1b3d",
"assets/assets/imgs/coffee/logo.png": "12e54dcaeb4fceba4a2bae0be98a3612",
"assets/assets/imgs/El72ny/1.jpg": "f593c33c3a72dcb2d6d0a8e8034da494",
"assets/assets/imgs/El72ny/2.jpg": "1a71d4b7d894d668107d2082cb3581c1",
"assets/assets/imgs/El72ny/3.jpg": "0b171a70815638d76d3e329473dc0ede",
"assets/assets/imgs/El72ny/4.jpg": "e406f4e983aa5e66ac6e47cd4eaa94d4",
"assets/assets/imgs/El72ny/5.jpg": "b17672198c850e2f504c5286c8cd3127",
"assets/assets/imgs/El72ny/6.jpg": "dd394421c7781e3aef3a32bd08c8d38d",
"assets/assets/imgs/El72ny/El72ny.png": "d242cb1bd6f43046a56513e437052263",
"assets/assets/imgs/El72ny/logo.png": "1096dd6fb7b8c74baf503a854e875c27",
"assets/assets/imgs/flutter.png": "0b5a2f8d3f4d173805affaf9f84f6c87",
"assets/assets/imgs/gpt/1.jpg": "9e1e4fbdb8ef0c6b656a93ad3d0218b5",
"assets/assets/imgs/gpt/2.jpg": "951e8e31a6da9c13f66da2ecfdb8cca5",
"assets/assets/imgs/gpt/3.jpg": "eb286a193cdda0ed0c6113b4d8f83a3d",
"assets/assets/imgs/gpt/4.jpg": "951e8e31a6da9c13f66da2ecfdb8cca5",
"assets/assets/imgs/gpt/5.jpg": "951e8e31a6da9c13f66da2ecfdb8cca5",
"assets/assets/imgs/gpt/6.jpg": "9e1e4fbdb8ef0c6b656a93ad3d0218b5",
"assets/assets/imgs/gpt/gpt.png": "2e0842d96ac61d7da2d9db9730648f3d",
"assets/assets/imgs/gpt/logo.png": "3968cc69447bad44485ea5afc6075100",
"assets/assets/imgs/hospital/1.jpg": "c445a5b0dc1b9a3e3d4127069ba9e438",
"assets/assets/imgs/hospital/2.jpg": "bff9527fbc90cd7f3e13f07b8edfcf22",
"assets/assets/imgs/hospital/3.jpg": "34cbd2e0c84679c13cfbb6d25dd7a794",
"assets/assets/imgs/hospital/4.jpg": "da48dac2c82bf2b0b85e8846d9abc0d2",
"assets/assets/imgs/hospital/5.jpg": "ce80ce31da8fb103f292f4a123db603c",
"assets/assets/imgs/hospital/6.jpg": "34cbd2e0c84679c13cfbb6d25dd7a794",
"assets/assets/imgs/hospital/hos.png": "f235c5e8208c3029a134a4d197317821",
"assets/assets/imgs/hospital/logo.png": "1096dd6fb7b8c74baf503a854e875c27",
"assets/assets/imgs/hub/1.jpg": "2c08fde5ec16483877f02ca5796f9404",
"assets/assets/imgs/hub/2.jpg": "fc7b2085711feb655874bf8c2be6d3dc",
"assets/assets/imgs/hub/3.jpg": "c400f5ffd5efbcc3fcc922240bbd07b2",
"assets/assets/imgs/hub/4.jpg": "644d9cdb846b067fb7fc13699aeb239e",
"assets/assets/imgs/hub/5.jpg": "20ee06c12c932d4d9f124bc77c321c3c",
"assets/assets/imgs/hub/6.jpg": "0d7ba950b900ae8bc4dae3352f744f8c",
"assets/assets/imgs/hub/hub.png": "4a0026f6df90d44a76c4ed59aa3e82e9",
"assets/assets/imgs/hub/logo.png": "12fcfbab98782e3ecc00b7650aaa36e9",
"assets/assets/imgs/logo.png": "a13fb9b3d9153530986ced275faed9ba",
"assets/assets/imgs/myPic.png": "d275d4bef917ee458f01be4408be6c51",
"assets/assets/imgs/note/1.jpg": "fc7a1ffef23983b7e858da76a231795a",
"assets/assets/imgs/note/2.jpg": "fede372887cfa075e118fe88994afc94",
"assets/assets/imgs/note/3.jpg": "d3920e050d4dcc1e8596e109fbe175cc",
"assets/assets/imgs/note/4.jpg": "ca7f709e73cdc912d7fa20a785b321df",
"assets/assets/imgs/note/5.jpg": "748bbfceb5079a91edfb25317d950401",
"assets/assets/imgs/note/6.jpg": "860c448beaca4b445c76cc47e330d8c8",
"assets/assets/imgs/note/logo.png": "7bf3c12142d682f6cd23a7f613cd2e15",
"assets/assets/imgs/note/note.png": "d8cec7b2455ebd1cdb4640510c9e4e32",
"assets/assets/imgs/rick/1.jpg": "fe1badf9fa42100a8c1ed98740c0f17f",
"assets/assets/imgs/rick/2.jpg": "174661d0dd8ea67a5f8f8b4182e78e03",
"assets/assets/imgs/rick/3.jpg": "795292087e6717eeafafb67c63a33df9",
"assets/assets/imgs/rick/3h.jpg": "f15e38018e2388b22012ec354f13e063",
"assets/assets/imgs/rick/4.jpg": "6d48900bf713ceb5a8ba75ae21620282",
"assets/assets/imgs/rick/5.jpg": "27959d6e9e35cae18c813530fd6df25e",
"assets/assets/imgs/rick/6.jpg": "9d4a1789150c03792c692b81f9f47fa6",
"assets/assets/imgs/rick/logo.png": "c63a6c854254c86199bbc9ba5e43b0ab",
"assets/assets/imgs/rick/rick.png": "a7e0fc5d4528dc599d0479526d8fb361",
"assets/assets/imgs/seller/1.jpg": "5a309810f658d234dabfe9bf60cfc1f3",
"assets/assets/imgs/seller/2.jpg": "d06e28a43580c92672482964ac6fe5c0",
"assets/assets/imgs/seller/3.jpg": "3d09151a17c8d76385187f83e667ae4b",
"assets/assets/imgs/seller/4.jpg": "f7eae61b3377ed376d609e195cf7d4f8",
"assets/assets/imgs/seller/5.jpg": "09af48bebe94518d28dee8532a53a76a",
"assets/assets/imgs/seller/6.jpg": "13fa66a2d3dbb0aca0cb6461cb6146cb",
"assets/assets/imgs/seller/logo.png": "a4f1c304f7763892602ddff1ae7ed6ab",
"assets/assets/imgs/seller/seller.png": "4e8db1b917f65c6f1fb4ca5b81c2283b",
"assets/assets/imgs/soon.png": "9a1e3f6279e92b82b694e517759a2a95",
"assets/assets/imgs/weather/1.jpg": "e5f305e686d556c8e65853562c782e02",
"assets/assets/imgs/weather/2.jpg": "93ce77c7ddadca8a95120f0e93d599f5",
"assets/assets/imgs/weather/3.jpg": "e5f305e686d556c8e65853562c782e02",
"assets/assets/imgs/weather/4.jpg": "4b9f9112b068430657de05c422334888",
"assets/assets/imgs/weather/5.jpg": "7258ad046bdd0ab4fe45b87d3abf3c3d",
"assets/assets/imgs/weather/6.jpg": "4b9f9112b068430657de05c422334888",
"assets/assets/imgs/weather/logo.png": "6ea14e96446ab0266a22590d9d66d2df",
"assets/assets/imgs/weather/weather.png": "dbf0f7ba86874f2e6d4ad567e04f4d42",
"assets/assets/lottie/bot.json": "342278e571ecc64b5a8aba55b1bb3347",
"assets/assets/lottie/downArrow.json": "09726de6181cd5532ce393cfd5f18f40",
"assets/FontManifest.json": "663783f541c46e7f04c244ce710d1b61",
"assets/fonts/MaterialIcons-Regular.otf": "c8dde5aa413b0b02354c7aaba495cb8d",
"assets/NOTICES": "02b1435c26a19f58a457e3a94d625fe5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "6ee7f7b9111fdfc06dc21b4fa85406f5",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4790475d02b2ffa2e6998f275c7a4cab",
"/": "4790475d02b2ffa2e6998f275c7a4cab",
"main.dart.js": "0ca7b8c995be5d93452a4dbde5af8e23",
"manifest.json": "d8fe34f7ae4c072a77b924e01dac8a50",
"version.json": "9b818ca9511483c901bed1545384376c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
  for (var resourceKey of Object.keys(RESOURCES)) {
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
