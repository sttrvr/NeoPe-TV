// Data - 162 ta kanal (Aqlvoy'siz)
const channels = [
    { id: "ch_2", name: "BIZ Cinema", desc: "Jonli efir", url: "https://fl.biztv.media/cinema_720_EMfSyXgoRdiIHgldXTZICucKTIeCKO/index.m3u8", logo: "https://biztv.uz/static/media/biz-cinema.286b83dc.png", quality: "HD" },
    { id: "ch_3", name: "BIZ Music", desc: "Jonli efir", url: "https://fl.biztv.media/music_720_QAKpGmVUjaPApCNjpsgBxrdqNihAkl/index.m3u8", logo: "https://biztv.uz/static/media/biz-music.0b7f3d40.png", quality: "HD" },
    { id: "ch_4", name: "BIZ TV", desc: "Jonli efir", url: "https://fl.biztv.media/biz_tv_720_uni8jhub4h8fub4idejswh8dh3j94finbu4nidj39inwsj92in3d/index.m3u8", logo: "https://biztv.uz/static/media/logo.5f993187.png", quality: "HD" },
    { id: "ch_5", name: "Bolajon", desc: "Jonli efir", url: "https://stream8.cinerama.uz/1007/playlist.m3u8", logo: "https://uzdtv.uz/images/channel_1606537372.png" },
    { id: "ch_7", name: "Dasturxon", desc: "Jonli efir", url: "https://stream8.cinerama.uz/1206/tracks-v1a1/playlist.m3u8", logo: "https://mw.tvcom.uz/logo/Frame_777-341x245.png" },
    { id: "ch_8", name: "Dunyo bo'ylab", desc: "Jonli efir", url: "https://stream8.cinerama.uz/1006/tracks-v1a1/playlist.m3u8", logo: "https://api.logobank.uz/media/logos_png/Dunyo_Boylab-01.png" },
    { id: "ch_10", name: "FTV", desc: "Jonli efir", url: "https://stream8.cinerama.uz/1018/playlist.m3u8", logo: "https://mw.tvcom.uz/logo/icon/FTV.png" },
    { id: "ch_11", name: "Kinoteatr", desc: "Jonli efir", url: "https://stream8.cinerama.uz/1009/tracks-v1a1/playlist.m3u8", logo: "https://ztv.uz/uploads/posts/2020-03/1585224907_kinoteatr.jpg" },
    { id: "ch_12", name: "Madaniyat va ma'rifat", desc: "Jonli efir", url: "https://stream8.cinerama.uz/1005/tracks-v1a1/playlist.m3u8", logo: "https://mw.tvcom.uz/logo/icon/Madaniyat_va_marifat.png" },
    { id: "ch_14", name: "Mahalla", desc: "Jonli efir", url: "https://stream8.cinerama.uz/1013/tracks-v1a1/playlist.m3u8", logo: "https://mw.tvcom.uz/logo/icon/Mahalla.png" },
    { id: "ch_16", name: "Milliy", desc: "Jonli efir", url: "https://stream8.cinerama.uz/1014/tracks-v1a1/playlist.m3u8", logo: "https://ledokolgroup.com/assets/media/brand/milliy.png" },
    { id: "ch_19", name: "MY5", desc: "Jonli efir", url: "https://stream8.cinerama.uz/1217/tracks-v1a1/playlist.m3u8", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/MY5_TV_logotipi.png/1200px-MY5_TV_logotipi.png" },
    { id: "ch_21", name: "Navo", desc: "Jonli efir", url: "https://stream8.cinerama.uz/1008/tracks-v1a1/playlist.m3u8", logo: "https://api.logobank.uz/media/logos_png/Navo-01.png" },
    { id: "ch_23", name: "O'zbekiston", desc: "Jonli efir", url: "https://stream8.cinerama.uz/1001/tracks-v1a1/playlist.m3u8", logo: "https://uzdtv.uz/images/channel_1606476886.png", quality: "HD" },
    { id: "ch_25", name: "O'zbekiston 24", desc: "Jonli efir", url: "https://stream8.cinerama.uz/1011/tracks-v1a1/playlist.m3u8", logo: "https://aniq.uz/photos/news/YsVapPFhq5wtlm0.jpeg", quality: "HD" },
    { id: "ch_27", name: "O'zbekiston Tarixi", desc: "Jonli efir", url: "https://stream8.cinerama.uz/1209/tracks-v1a1/playlist.m3u8", logo: "https://uzdtv.uz/images/channel_1671790355.jpeg" },
    { id: "ch_29", name: "Renessans", desc: "Jonli efir", url: "https://stream8.cinerama.uz/1221/tracks-v1a1/playlist.m3u8", logo: "https://brendgoda-2023.marketing.uz/uploads/brands/3ea5f26e6223.png" },
    { id: "ch_30", name: "Sevimli", desc: "Jonli efir", url: "https://stream8.cinerama.uz/1017/tracks-v1a1/playlist.m3u8", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5b/SEVIMLI_TV_LOGO.png" },
    { id: "ch_31", name: "Toshkent", desc: "Jonli efir", url: "https://stream8.cinerama.uz/1003/tracks-v1a1/playlist.m3u8", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5hOWhBpX-54j-BizCcE2Arx0dyRHqd_sq-A&s" },
    { id: "ch_33", name: "UzReport", desc: "Jonli efir", url: "https://stream8.cinerama.uz/1015/tracks-v1a1/playlist.m3u8", logo: "https://media.clicktv.platform24.tv/img/ch/40/8f/408fd3cdbe9f6524bcaafa3ce6a3ab90.png?w=408&format=webp" },
    { id: "ch_34", name: "Yoshlar", desc: "Jonli efir", url: "https://stream8.cinerama.uz/1002/tracks-v1a1/playlist.m3u8", logo: "https://yoshlartv.uz/static/media/logo_yoshlar_uz.f1753e22.png", quality: "HD" },
    { id: "ch_36", name: "Zo'r", desc: "Jonli efir", url: "https://stream8.cinerama.uz/1016/tracks-v1a1/mono.m3u8", logo: "https://api.logobank.uz/media/logos_png/Zor_TV-01.png" },
    { id: "ch_37", name: "1 канал", desc: "Jonli efir", url: "https://edge1.1internet.tv/dash-live2/streams/1tv-dvr/1tvdash.mpd", logo: "https://iptvx.one/picons/pervy.png", quality: "HD" },
    { id: "ch_38", name: "360°", desc: "Jonli efir", url: "https://live-vgtrksmotrim.cdnvideo.ru/vgtrksmotrim/smotrim-live-04-srt.smil/playlist.m3u8", logo: "https://iptvx.one/picons/360-podmoskovie.png" },
    { id: "ch_39", name: "RTVi", desc: "Jonli efir", url: "http://178.134.1.158:8081/rtvi/index.m3u8", logo: "https://iptvx.one/picons/rtvi.png" },
    { id: "ch_40", name: "TV BRICS", desc: "Jonli efir", url: "http://rusbrics.mediacdn.ru/cdn/brics/russian/playlist_hdhigh.m3u8", logo: "https://iptvx.one/picons/tv-brics.png", quality: "HD" },
    { id: "ch_41", name: "Беларусь 1", desc: "Jonli efir", url: "https://edge55.dc.beltelecom.by/ngtrk/_definst_/smil:belarus1.smil/chunklist_w_b1460000_sleng.m3u8", logo: "https://iptvx.one/picons/belarus1hd.png", quality: "HD" },
    { id: "ch_42", name: "БелРос", desc: "Jonli efir", url: "http://live2.mediacdn.ru/sr1/tro/playlist_1.5M.m3u8", logo: "https://iptvx.one/picons/belros.png" },
    { id: "ch_43", name: "Большая Азия", desc: "Jonli efir", url: "https://live-bigasia.cdnvideo.ru/bigasia/bigasia.smil/tracks-v1a1/mono.m3u8", logo: "https://iptvx.one/picons/bolshaya-azia.png" },
    { id: "ch_44", name: "Время", desc: "Jonli efir", url: "https://cdn4.skygo.mn/live/disk1/Vremya/HLSv3-FTA/Vremya.m3u8", logo: "https://iptvx.one/picons/vremia.png" },
    { id: "ch_45", name: "Звезда", desc: "Jonli efir", url: "http://tvchannelstream1.tvzvezda.ru/cdn/tvzvezda/playlist_hdhigh.m3u8", logo: "https://iptvx.one/picons/zvezda.png", quality: "HD" },
    { id: "ch_46", name: "Красная линия", desc: "Jonli efir", url: "https://s55766.cdn.ngenix.net/s55766-media-origin/rline_high/tracks-v1a1/mono.m3u8", logo: "https://iptvx.one/picons/krasnaya-linia.png" },
    { id: "ch_47", name: "Мир", desc: "Jonli efir", url: "http://hls.mirtv.cdnvideo.ru/mirtv-parampublish/mirtv_2500/playlist.m3u8", logo: "https://iptvx.one/picons/mir.png" },
    { id: "ch_48", name: "НТВ", desc: "Jonli efir", url: "http://cdn2.ntv.ru/ntv0_hd/playlist.m3u8", logo: "https://iptvx.one/picons/ntv.png", quality: "HD" },
    { id: "ch_49", name: "ОНТ", desc: "Jonli efir", url: "https://edge53.dc.beltelecom.by/ont/_definst_/ont/chunklist_w741300442.m3u8", logo: "https://iptvx.one/picons/ont-by.png" },
    { id: "ch_50", name: "ПРНК", desc: "Jonli efir", url: "https://serv25.vintera.tv/1pnk/prnk/chunks.m3u8", logo: "https://iptvx.one/picons/prnk-tv.png" },
    { id: "ch_51", name: "Рен ТВ Int", desc: "Jonli efir", url: "http://cdn4.skygo.mn/live/disk1/RenTV/HLSv3-FTA/RenTV.m3u8", logo: "https://iptvx.one/picons/rentv-int.png" },
    { id: "ch_52", name: "Россия 1", desc: "Jonli efir", url: "https://vgtrkregion-reg.cdnvideo.ru/vgtrk/0/russia1-hd/index.m3u8", logo: "https://iptvx.one/picons/rossia1.png", quality: "HD" },
    { id: "ch_53", name: "CTV.BY", desc: "Jonli efir", url: "http://ctv.dc.beltelecom.by/ctv/ctv.stream/playlist.m3u8", logo: "https://iptvx.one/picons/stv-by.png" },
    { id: "ch_54", name: "ТВ Центр", desc: "Jonli efir", url: "http://tvc-hls.cdnvideo.ru/tvc-res/smil:vd9221_2.smil/playlist.m3u8", logo: "https://iptvx.one/picons/tvcentr.png" },
    { id: "ch_55", name: "360° Новости", desc: "Jonli efir", url: "https://edge-tv-ll.facecast.io/evacoder_hls_hi/UBZfFgtKB1JwTwoDERNQVGGs/1080.m3u8", logo: "https://iptvx.one/picons/360-news.png" },
    { id: "ch_56", name: "RTД", desc: "Jonli efir", url: "http://rt-doc.rttv.com/dvr/rtdru/rtdru1080.m3u8", logo: "https://iptvx.one/picons/rt-doc.png" },
    { id: "ch_57", name: "Беларусь 24", desc: "Jonli efir", url: "https://edge50.dc.beltelecom.by/ngtrk/_definst_/smil:belarus24.smil/chunklist_w1008231497_b5160000_sleng.m3u8", logo: "https://iptvx.one/picons/belarus24.png" },
    { id: "ch_58", name: "ВМЕСТЕ:РФ", desc: "Jonli efir", url: "https://qcpdqumitwf.a.trbcdn.net/livemastersrt/pr4mw_lvie-vmesterf-srt.smil/playlist.m3u8", logo: "https://iptvx.one/picons/vmeste-rf.png" },
    { id: "ch_59", name: "Известия", desc: "Jonli efir", url: "http://hls-igi.cdnvideo.ru/igi/igi_hq/playlist.m3u8", logo: "https://iptvx.one/picons/izvestia.png" },
    { id: "ch_60", name: "Крик ТВ", desc: "Jonli efir", url: "http://hls-rictv.cdnvideo.ru/rictv/rictv-srt-stream/playlist.m3u8", logo: "https://iptvx.one/picons/krik-tv.png" },
    { id: "ch_61", name: "Лен ТВ 24", desc: "Jonli efir", url: "https://player.smotrim.ru/iframe/stream/live_id/3e95d201-f87d-4ac1-8897-db2c66bb9657", logo: "https://iptvx.one/picons/lot-47.png" },
    { id: "ch_62", name: "Мир 24", desc: "Jonli efir", url: "http://hls.mirtv.cdnvideo.ru/mirtv-parampublish/mir24_2500/playlist.m3u8", logo: "https://iptvx.one/picons/mir24.png" },
    { id: "ch_63", name: "М24", desc: "Jonli efir", url: "https://player.smotrim.ru/iframe/stream/live_id/efab3cbe-a29c-45f0-9596-5cb4f1ce7fbe", logo: "https://iptvx.one/picons/moskva-24.png" },
    { id: "ch_64", name: "Первый информационный", desc: "Jonli efir", url: "https://edge50.dc.beltelecom.by/ngtrk/_definst_/smil:informacionnyy.smil/chunklist_w868240704_b5160000_sleng.m3u8", logo: "https://iptvx.one/picons/pervy-info-by.png" },
    { id: "ch_65", name: "Россия 24", desc: "Jonli efir", url: "https://vgtrkregion-reg.cdnvideo.ru/vgtrk/0/russia24-sd/index.m3u8", logo: "https://iptvx.one/picons/rossia-24.png" },
    { id: "ch_66", name: "РБК", desc: "Jonli efir", url: "http://online.video.rbc.ru/online/rbctvhd_1080p/index.m3u8", logo: "https://iptvx.one/picons/rbk.png" },
    { id: "ch_67", name: "Соловьев.Live", desc: "Jonli efir", url: "https://player.smotrim.ru/iframe/stream/live_id/985d5c7b-9727-4942-a4ba-a6e852caf0c1", logo: "https://iptvx.one/picons/solovjinypomiot.png" },
    { id: "ch_68", name: "Life", desc: "Jonli efir", url: "http://lifetv.bitflip.ee/live/stream1_1/index.m3u8", logo: "http://epg.one/img2/2136.png" },
    { id: "ch_69", name: "Надежда", desc: "Jonli efir", url: "http://tvhope.cdnvideo.ru/tvhope-pull/tvhope_1/tracks-v1a1/mono.m3u8?hls_proxy_host=5edf215ae950326c87f8788991c1ffc7", logo: "https://iptvx.one/picons/nadezhda.png" },
    { id: "ch_70", name: "МузСоюз", desc: "Jonli efir", url: "http://hls-tvsoyuz.cdnvideo.ru/tvsoyuz2/muzsoyuz.6fw0-58xp-acts-esy0/playlist.m3u8", logo: "https://iptvx.one/picons/muzsoyuz.png" },
    { id: "ch_71", name: "Союз", desc: "Jonli efir", url: "http://hls-tvsoyuz.cdnvideo.ru/tvsoyuz/soyuz/playlist.m3u8", logo: "https://iptvx.one/picons/soyuz.png" },
    { id: "ch_72", name: "Спас", desc: "Jonli efir", url: "http://tvspas.mediacdn.ru/cdn/spas/tracks-v1a1/mono.ts.m3u8", logo: "https://iptvx.one/picons/spas.png" },
    { id: "ch_73", name: "Ani", desc: "Jonli efir", url: "http://stv.mediacdn.ru/live/cdn/ani/tracks-v1a1/mono.ts.m3u8", logo: "https://iptvx.one/picons/ani.png" },
    { id: "ch_74", name: "Da Vinci", desc: "Jonli efir", url: "http://91.194.191.241:8081/chid426/tracks-v1a1/mono.m3u8", logo: "https://iptvx.one/picons/da-vinci.png" },
    { id: "ch_75", name: "TiJi", desc: "Jonli efir", url: "http://188.190.222.53/TiJi/index.m3u8", logo: "https://iptvx.one/picons/tiji.png" },
    { id: "ch_76", name: "Детское кино", desc: "Jonli efir", url: "https://v2.catcast.tv/content/38720/index.m3u8", logo: "https://iptvx.one/picons/detkinoint-tviksel.png" },
    { id: "ch_77", name: "Детский мир", desc: "Jonli efir", url: "http://217.21.34.160:38007/detmir/index.m3u8", logo: "https://iptvx.one/picons/detsky-mir.png" },
    { id: "ch_78", name: "Карусель", desc: "Jonli efir", url: "http://217.21.34.160:38005/karusel/index.m3u8", logo: "https://iptvx.one/picons/karusel.png" },
    { id: "ch_79", name: "Мама", desc: "Jonli efir", url: "http://stv.mediacdn.ru/live/cdn/mama/tracks-v1a1/mono.ts.m3u8", logo: "https://iptvx.one/picons/mama.png" },
    { id: "ch_80", name: "Мульт", desc: "Jonli efir", url: "http://stv.mediacdn.ru/live/cdn/mult/tracks-v1a1/mono.ts.m3u8", logo: "https://iptvx.one/picons/mult.png" },
    { id: "ch_81", name: "МУЛЬТиМУЗЫКА", desc: "Jonli efir", url: "http://stv.mediacdn.ru/live/cdn/multimuzika/tracks-v1a1/mono.ts.m3u8", logo: "https://iptvx.one/picons/multimuzyka.png" },
    { id: "ch_82", name: "Мультиландия", desc: "Jonli efir", url: "http://91.194.191.241:8081/chid62/tracks-v1a1/mono.m3u8", logo: "https://iptvx.one/picons/multimania.png" },
    { id: "ch_83", name: "Мультимания", desc: "Jonli efir", url: "http://sirius.greenhosting.ru/MultimaniaRu/video.m3u8", logo: "https://iptvx.one/picons/multimania-lv.png" },
    { id: "ch_84", name: "О!", desc: "Jonli efir", url: "http://95.66.188.74:80/O/mono.m3u8", logo: "https://iptvx.one/picons/o_.png" },
    { id: "ch_85", name: "Пингвин", desc: "Jonli efir", url: "http://sirius.greenhosting.ru/PingvinRu/tracks-v1a1/mono.m3u8", logo: "https://iptvx.one/picons/pingvin-lolo.png" },
    { id: "ch_86", name: "Рыжий", desc: "Jonli efir", url: "http://46.8.46.14/Ryzhiy/index.m3u8", logo: "https://iptvx.one/picons/ryzhy.png" },
    { id: "ch_87", name: "Радость моя", desc: "Jonli efir", url: "http://radm.mediacdn.ru/cdn/radost/playlist_sdhigh.m3u8", logo: "https://iptvx.one/picons/radost-moya.png" },
    { id: "ch_88", name: "Смайл", desc: "Jonli efir", url: "https://5f05e059699ae.streamlock.net/WEB_Smilik/ngrp:Smilik.stream-adaptive/playlist.m3u8", logo: "https://iptvx.one/picons/smaylik-tv.png" },
    { id: "ch_89", name: "Солнце", desc: "Jonli efir", url: "https://tv.mediacdn.ru/live/solntse/playlist_3000k.m3u8", logo: "https://iptvx.one/picons/solnce.png" },
    { id: "ch_90", name: "7", desc: "Jonli efir", url: "http://v4.proofix.ru:80/7tv-live/index.m3u8", logo: "https://iptvx.one/picons/7tv.png" },
    { id: "ch_91", name: "E", desc: "Jonli efir", url: "http://cdn-01.bonus-tv.ru:80/gsl/tracks-v1a1/mono.m3u8", logo: "https://iptvx.one/picons/e-tv.png" },
    { id: "ch_92", name: "Беларусь 2", desc: "Jonli efir", url: "https://edge50.dc.beltelecom.by/ngtrk/smil:belarus2.smil/chunklist_b5160000_sleng.m3u8", logo: "https://iptvx.one/picons/belarus2hd.png" },
    { id: "ch_93", name: "Вопросы и ответы", desc: "Jonli efir", url: "http://178.212.71.253:8000/play/97/index.m3u8", logo: "https://iptvx.one/picons/voprosy-i-otvety.png" },
    { id: "ch_94", name: "Девятка", desc: "Jonli efir", url: "http://devyatka.iptv2022.com/tracks-v1a1/mono.m3u8", logo: "https://iptvx.one/picons/deviatka.png" },
    { id: "ch_95", name: "Калейдоскоп ТВ", desc: "Jonli efir", url: "http://serv25.vintera.tv:8081/kaleidoscop/kaleidoscop_sd/playlist.m3u8", logo: "https://iptvx.one/picons/kaleydoskop.png" },
    { id: "ch_96", name: "Китай ТВ", desc: "Jonli efir", url: "https://cdn.nexttvnet.ru/hlsl/provide/61394/ChinaTV2/china-tv_1920x1080/index.m3u8", logo: "https://iptvx.one/picons/rus-hualiang-tv.png" },
    { id: "ch_97", name: "НТВ Право", desc: "Jonli efir", url: "http://cdn.ntv.ru/th_pravo/tracks-v1a1/mono.m3u8", logo: "https://iptvx.one/picons/ntv-pravo.png" },
    { id: "ch_98", name: "Перец", desc: "Jonli efir", url: "https://cdn4.skygo.mn/live/disk1/Che/HLSv3-FTA/Che.m3u8", logo: "https://iptvx.one/picons/perec.png" },
    { id: "ch_99", name: "Продвижение", desc: "Jonli efir", url: "http://origin5.mediacdn.ru/live/prodvizhenie_new/index.m3u8", logo: "https://iptvx.one/picons/prodvizhenie.png" },
    { id: "ch_100", name: "СТРК", desc: "Jonli efir", url: "http://sochinskayatrk.ru/hdtv/hls/CTPK_HD/playlist.m3u8", logo: "https://iptvx.one/picons/strk.png" },
    { id: "ch_101", name: "СТС", desc: "Jonli efir", url: "http://158.101.222.193:88/georgia_play.php?id=ctctv", logo: "https://iptvx.one/picons/sts-int.png" },
    { id: "ch_102", name: "Театр", desc: "Jonli efir", url: "http://46.8.46.14/Teatr/index.m3u8", logo: "https://iptvx.one/picons/teatr.png" },
    { id: "ch_103", name: "Теледом", desc: "Jonli efir", url: "http://iam-profi.ru/hls-live/livepkgr/_definst_/liveevent/td720.m3u8", logo: "https://iptvx.one/picons/teledom.png" },
    { id: "ch_104", name: "ТНТ4", desc: "Jonli efir", url: "https://cdn4.skygo.mn/live/disk1/TNT4/HLSv3-FTA/TNT4.m3u8", logo: "https://iptvx.one/picons/tnt4.png" },
    { id: "ch_105", name: "Ю", desc: "Jonli efir", url: "http://cdn-01.bonus-tv.ru/u/tracks-v1a1/mono.m3u8", logo: "https://iptvx.one/picons/yu.png" },
    { id: "ch_106", name: "Bridge Rock", desc: "Jonli efir", url: "http://91.194.191.241:8081/chid475/tracks-v1a1/mono.m3u8", logo: "https://iptvx.one/picons/bridge-tv-rock.png" },
    { id: "ch_107", name: "Bridge Шлягер", desc: "Jonli efir", url: "http://91.194.191.241:8081/chid98/tracks-v1a1/mono.m3u8", logo: "https://iptvx.one/picons/bridge-tv-shlager.png" },
    { id: "ch_108", name: "Retro Music", desc: "Jonli efir", url: "http://stream.mediawork.cz/retrotv/retrotvHQ1/playlist.m3u8", logo: "https://iptvx.one/picons/retro-music-cz.png" },
    { id: "ch_109", name: "Trace Urban", desc: "Jonli efir", url: "http://lightning-traceurban-samsungau.amagi.tv/playlist1080p.m3u8", logo: "https://iptvx.one/picons/bridge-tv-rock.png" },
    { id: "ch_110", name: "RU", desc: "Jonli efir", url: "https://hls-03-video.webcaramba.com/rutv/live_480/index.m3u8", logo: "https://iptvx.one/picons/ru-tv.png" },
    { id: "ch_111", name: "RU HD", desc: "Jonli efir", url: "https://hls-03-video.webcaramba.com/rutv/live_1080/index.m3u8", logo: "https://iptvx.one/picons/ru-tv.png", quality: "HD" },
    { id: "ch_112", name: "Жар-Птица", desc: "Jonli efir", url: "http://streamer.rtcommufa.ru:1935/ptica/ptica1/playlist.m3u8", logo: "https://iptvx.one/picons/zhar-ptica.png" },
    { id: "ch_113", name: "Жара", desc: "Jonli efir", url: "http://46.8.46.14/Zhara/index.m3u8", logo: "https://iptvx.one/picons/zhara.png" },
    { id: "ch_114", name: "Страна FM", desc: "Jonli efir", url: "http://live.stranafm.cdnvideo.ru/stranafm/stranafm_hd.sdp/playlist.m3u8", logo: "https://iptvx.one/picons/radio-strana-fm-tv.png" },
    { id: "ch_115", name: "ТНТ Music", desc: "Jonli efir", url: "http://tntmsmotr.mediacdn.ru/cdn/smotr/playlist_hdhigh.m3u8", logo: "https://iptvx.one/picons/tnt-music.png", quality: "HD" },
    { id: "ch_116", name: "Шансон", desc: "Jonli efir", url: "https://hls-shansontv.cdnvideo.ru/shansontv/shansontv-sd.smil/playlist.m3u8", logo: "https://iptvx.one/picons/shanson-tv.png" },
    { id: "ch_117", name: "Cinema", desc: "Jonli efir", url: "http://185.46.48.18:80/cinema/tracks-v1a1/mono.m3u8", logo: "https://iptvx.one/picons/cinema.png" },
    { id: "ch_118", name: "Кино", desc: "Jonli efir", url: "http://vod.tuva.ru/kinotv/tracks-v1a1/mono.m3u8", logo: "https://iptvx.one/picons/kino-tv.png" },
    { id: "ch_119", name: "Start Air", desc: "Jonli efir", url: "https://livetv.mylifeisgood.net.ru/channels/strwc.m3u8", logo: "https://iptvx.one/picons/start-air.png" },
    { id: "ch_120", name: "Кино 1", desc: "Jonli efir", url: "http://kino-1.catcast.tv/content/38617/index.m3u8", logo: "https://iptvx.one/picons/kino1int-tviksel.png" },
    { id: "ch_121", name: "НТВ Сериал", desc: "Jonli efir", url: "http://cdn2.ntv.ru/th_serial/playlist.m3u8", logo: "https://iptvx.one/picons/ntv-serial.png" },
    { id: "ch_122", name: "НТВ Хит", desc: "Jonli efir", url: "http://cdn2.ntv.ru/th_hit/playlist.m3u8", logo: "https://iptvx.one/picons/ntv-xit.png" },
    { id: "ch_123", name: "Победа", desc: "Jonli efir", url: "https://streaming101.goodstream.cyou/live/43-req_offset_28000000-req_window_0-1k_v5.m3u8", logo: "https://iptvx.one/picons/pobeda.png" },
    { id: "ch_124", name: "Телекафе", desc: "Jonli efir", url: "http://45.11.139.43:8555/telekafe/index.m3u8", logo: "https://iptvx.one/picons/telekafe.png" },
    { id: "ch_125", name: "Феникс плюс кино", desc: "Jonli efir", url: "http://158.101.222.193:88/georgia_play.php?id=fenikspluskino", logo: "https://iptvx.one/picons/feniks-plus-kino.png" },
    { id: "ch_126", name: "15+ Music", desc: "Jonli efir", url: "https://dvr3.vokkavideo.xyz/CRINGETVHD/index.m3u8", logo: "https://taurerassets.xyz/tv_content/images/15plusmusichd.png" },
    { id: "ch_127", name: "alpha Cinema", desc: "Jonli efir", url: "https://dvr3.vokkavideo.xyz/ALPHACINEMAHD/index.m3u8", logo: "https://taurerassets.xyz/tv_content/images/alphacinemahd.png" },
    { id: "ch_128", name: "alpha Moretime", desc: "Jonli efir", url: "https://dvr3.vokkavideo.xyz/ALPHAMORETIMEHD/index.m3u8", logo: "https://taurerassets.xyz/tv_content/images/alphamoretimehd.png" },
    { id: "ch_129", name: "alpha Funny", desc: "Jonli efir", url: "https://dvr3.vokkavideo.xyz/ALPHAFUNNYHD/index.m3u8", logo: "https://taurerassets.xyz/tv_content/images/alphafunnyhd.png" },
    { id: "ch_130", name: "TV4", desc: "Jonli efir", url: "https://dvr3.vokkavideo.xyz/TV4SD/index.m3u8", logo: "https://taurerassets.xyz/tv_content/images/tv4sd.png" },
    { id: "ch_131", name: "TV4 HD", desc: "Jonli efir", url: "https://dvr3.vokkavideo.xyz/TV4HD/index.m3u8", logo: "https://taurerassets.xyz/tv_content/images/tv4hd.png", quality: "HD" },
    { id: "ch_132", name: "HTV", desc: "Jonli efir", url: "https://dvr3.vokkavideo.xyz/HTVHD/index.m3u8", logo: "https://taurerassets.xyz/tv_content/images/htvhd.png", quality: "HD" },
    { id: "ch_133", name: "Новый Русский", desc: "Jonli efir", url: "https://dvr3.vokkavideo.xyz/NEWRUSSIAHD/index.m3u8", logo: "https://taurerassets.xyz/tv_content/images/newrussianhd.png" },
    { id: "ch_134", name: "Беларусь 5", desc: "Jonli efir", url: "https://ngtrk.dc.beltelecom.by/ngtrk/_definst_/smil:belarus5/playlist.m3u8", logo: "https://iptvx.one/picons/belarus5hd.png" },
    { id: "ch_135", name: "Беларусь 5 Интернет", desc: "Jonli efir", url: "https://ngtrk.dc.beltelecom.by/ngtrk/_definst_/smil:belarus5int/playlist.m3u8", logo: "https://iptvx.one/picons/belarus5-inet.png" },
    { id: "ch_136", name: "Конный Мир", desc: "Jonli efir", url: "https://cdn-01.bonus-tv.ru/kmir/tracks-v1a1/mono.m3u8", logo: "https://iptvx.one/picons/konny-mir.png" },
    { id: "ch_137", name: "Матч!", desc: "Jonli efir", url: "http://catchup.videoline.ru/match/tracks-v1a1/mono.m3u8", logo: "https://iptvx.one/picons/match-tv.png" },
    { id: "ch_138", name: "Старт Триумф", desc: "Jonli efir", url: "https://bl.webcaster.pro/media/playlist/free_672d700f2f9510be660253786e4406fe_hd/33_85479982/1080p/4eaec8986e2012fb936478856fbf3b4b/4818731006.m3u8?live=15&ref=https://tvstart.ru/ru/pages/start-triumph/", logo: "https://iptvx.one/picons/start-triumf.png" },
    { id: "ch_139", name: "UNIVER", desc: "Jonli efir", url: "http://cdn.universmotri.ru/live/univer.sdp_1080p/playlist.m3u8", logo: "https://iptvx.one/picons/univer-tv.png" },
    { id: "ch_140", name: "Беларусь 3", desc: "Jonli efir", url: "https://edge50.dc.beltelecom.by/ngtrk/_definst_/smil:belarus3.smil/chunklist_w1684528521_b5160000_sleng.m3u8", logo: "https://iptvx.one/picons/belarus3hd.png" },
    { id: "ch_141", name: "Мособр", desc: "Jonli efir", url: "http://retj.educom.ru/mosobrtv/tv1/index.m3u8", logo: "https://iptvx.one/picons/moskovsky-obrazovatelny.png" },
    { id: "ch_142", name: "Просвещение", desc: "Jonli efir", url: "http://cdn-01.bonus-tv.ru/prosveschenie_edge/tracks-v1a1/index.m3u8", logo: "https://iptvx.one/picons/prosveschenie.png" },
    { id: "ch_143", name: "Россия К", desc: "Jonli efir", url: "https://vgtrkregion-reg.cdnvideo.ru/vgtrk/0/kultura-hd/index.m3u8", logo: "https://iptvx.one/picons/kultura.png" },
    { id: "ch_144", name: "Luxury", desc: "Jonli efir", url: "http://s1.tv-nano.com/Luxury_rec/tracks-v1a1/mono.ts.m3u8", logo: "https://iptvx.one/picons/luxury-hd.png" },
    { id: "ch_145", name: "Загородная Жизнь", desc: "Jonli efir", url: "http://185.57.68.33/40/mpegts", logo: "https://iptvx.one/picons/zagorodnaya-zhizn.png" },
    { id: "ch_146", name: "Лапки Live", desc: "Jonli efir", url: "http://tvip.btk.teleos.ru:8081/chid514/index.m3u8", logo: "https://iptvx.one/picons/lapki-live.png" },
    { id: "ch_147", name: "НТВ Стиль", desc: "Jonli efir", url: "http://cdn2.ntv.ru/th_style/playlist.m3u8", logo: "https://iptvx.one/picons/ntv-style.png" },
    { id: "ch_148", name: "Открытый мир", desc: "Jonli efir", url: "http://v4.proofix.ru/0mir/index.m3u8", logo: "https://iptvx.one/picons/otkryty-mir.png" },
    { id: "ch_149", name: "Приключения", desc: "Jonli efir", url: "http://tvip.btk.teleos.ru:8081/chid142/index.m3u8", logo: "https://iptvx.one/picons/prikluchenia-hd.png" },
    { id: "ch_150", name: "Светлое", desc: "Jonli efir", url: "http://176.107.219.20:9000/play/a009/index.m3u8", logo: "https://iptvx.one/picons/svetloe-tv.png" },
    { id: "ch_151", name: "Новый Век", desc: "Jonli efir", url: "http://tele2dvrnat01-02.cdnvideo.ru/stream/NAT_Tambov/hls/1280x720@2500/playlist.m3u8", logo: "https://iptvx.one/picons/novy-vek-tambov.png" },
    { id: "ch_152", name: "Россия 1 Тамбов", desc: "Jonli efir", url: "https://vgtrkregion-reg.cdnvideo.ru/vgtrk/tambov/russia1-hd/index.m3u8", logo: "https://iptvx.one/picons/rossia1.png" },
    { id: "ch_153", name: "Россия 24 Тамбов", desc: "Jonli efir", url: "https://vgtrkregion-reg.cdnvideo.ru/vgtrk/tambov/russia24-sd/index.m3u8", logo: "https://iptvx.one/picons/rossia-24.png" },
    { id: "ch_154", name: "Дорожное Радио", desc: "Jonli efir", url: "http://emgregion.hostingradio.ru:8064/moscow.dorognoe.mp3", logo: "https://iptvx.one/picons/dorozhnoe-radio.png" },
    { id: "ch_155", name: "Наше радио", desc: "Jonli efir", url: "http://nashe1.hostingradio.ru:80/nashe-256", logo: "https://toplogos.ru/images/thumbs/preview-logo-nashe-radio.png" },
    { id: "ch_156", name: "Радио DFM", desc: "Jonli efir", url: "http://dfm.hostingradio.ru/dfm128.mp3", logo: "https://iptvx.one/picons/radio-dfm.png" },
    { id: "ch_157", name: "Радио Маяк", desc: "Jonli efir", url: "http://icecast.vgtrk.cdnvideo.ru/mayakfm", logo: "https://iptvx.one/picons/radio-mayak.png" },
    { id: "ch_158", name: "Радио Мир", desc: "Jonli efir", url: "http://icecast-mirtv.cdnvideo.ru:8000/radio_mir_256", logo: "https://iptvx.one/picons/radio-mir.png" },
    { id: "ch_159", name: "Радио на семи холмах", desc: "Jonli efir", url: "http://emgregion.hostingradio.ru:8064/moscow.radio7.mp3", logo: "https://iptvx.one/picons/radio-na7xolmax.png" },
    { id: "ch_160", name: "Радио Шансон", desc: "Jonli efir", url: "http://chanson.hostingradio.ru:8041/chanson256.mp3", logo: "https://iptvx.one/picons/radio-shanson.png" },
    { id: "ch_161", name: "Радио Ваня", desc: "Jonli efir", url: "http://icecast-radiovanya.cdnvideo.ru:8000/radiovanya", logo: "https://iptvx.one/picons/radio-vania.png" },
    { id: "ch_162", name: "Ретро FM", desc: "Jonli efir", url: "http://emgregion.hostingradio.ru:8064/moscow.retrofm.mp3", logo: "https://iptvx.one/picons/retro-fm.png" },
    { id: "ch_163", name: "Хит FM", desc: "Jonli efir", url: "http://hitfm.hostingradio.ru/hitfm128.mp3", logo: "https://iptvx.one/picons/xit-fm.png" }
];

const movies = [
    { id: "m1", title: "Paddington 2", img: "https://static.wikia.nocookie.net/paddingtonbear/images/1/1a/Paddington_2_poster_11.jpg", url: "https://st16.febspot.com/remote_control.php?file=B64YTo0OntzOjQ6InRpbWUiO2k6MTc2NTI4OTc4NjtzOjU6ImxpbWl0IjtpOjA7czo0OiJmaWxlIjtzOjQwOiIvdmlkZW9zLzE0NDkwMDAvMTQ0OTQwMi8xNDQ5NDAyXzcyMHAubXA0IjtzOjI6ImN2IjtzOjMyOiIxN2M5NDVkYTBhZTlhNzkyZGNkNThkMmZjYzg2ZjNlNCI7fQ%3D%3D", desc: "Action, Drama", year: "2024", quality: "4K HDR", badge: "PREMYERA", isPaid: true },
    { id: "m2", title: "EXmas", img: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p25915919_v_h8_ab.jpg", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", desc: "Drama, Romantic", year: "2023", quality: "HD", badge: "18+" },
    { id: "m3", title: "Sehrli Rojdestvo ertagi", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNAmsDFpO5QzEwwoLJEcBUnPg3u97QFNkaBw&s", url: "https://ok.ru/videoembed/9329940236823?nochat=1", desc: "Comedy", year: "2022", quality: "FULL HD", badge: "10+" },
    { id: "m4", title: "Vashingtonda Rojdestvo", img: "https://thumbs.dfs.ivi.ru/storage37/contents/c/4/d03fe155b824592a41ca38c1dc3a06.jpg", url: "https://ok.ru/videoembed/2965805009504?nochat=1", desc: "Romantik", year: "2022", quality: "FULL HD", badge: "12+" },
    { id: "ny1", title: "Uyda Yolg'iz", img: "https://m.media-amazon.com/images/M/MV5BMzFkM2YwOTQtYzk2Mi00N2VlLWE3NTItN2YwNDg1YmY0ZDNmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg", url: "https://s10.faylmovi.ru/tarjima_kinolar/Uyda_yolgiz_1_1080.mp4", desc: "Comedy, Family", year: "1990", quality: "FHD", badge: "Eslatma" },
    { id: "ny2", title: "Uyda Yolg'iz 2", img: "https://m.media-amazon.com/images/M/MV5BNDI1MzM0Y2YtYmIyMS00ODE3LTlhZjEtZTUyNmEzMTNhZWU5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg", url: "https://s10.faylmovi.ru/tarjima_kinolar/Uyda_yolgiz_2_1080.mp4", desc: "Comedy, Adventure", year: "1992", quality: "HD", badge: "HIT" },
    { id: "ny3", title: "Taqdir hazili", img: "https://static.okko.tv/images/v4/a0850f88-ee5b-4b27-9971-b3fc5fbfa2f8", url: "", desc: "Comedy, Romantic", year: "1992", quality: "HD", badge: "18+" },
    { id: "ny4", title: "Qorboboni qutqarish", img: "https://thumbs.dfs.ivi.ru/storage0/contents/0/4/1a370db1c941b8bcd9ad58bf2ad7ec.jpg", url: "https://s3.vimo.cam/upload/videos/2022/12/r3Z1yWWuSqBg82OUPDSi_27_4b91a1bf202e88fd008aca72af8b3589_video_720p_converted.mp4", desc: "Comedy, Animation", year: "2020", quality: "FHD", badge: "", isPaid: true },
    { id: "p1", title: "Artur Krismas", img: "https://m.media-amazon.com/images/M/MV5BNTczMjMwMTE2OV5BMl5BanBnXkFtZTcwNDU0NTAwNw@@._V1_.jpg", url: "https://vimo.cam/upload/videos/2022/12/ea8dyfiSRcWfWmOPhBiQ_30_029e04c3b5b6403445a282bfd1dcba71_video_720p_converted.mp4", desc: "Drama, Animation", year: "2023", quality: "4K", badge: "Multifilm" },
    { id: "p2", title: "Grinch", img: "https://thumbs.dfs.ivi.ru/storage23/contents/d/1/13b5c0cbf0bb637b222d4b45a51531.jpg", url: "https://s3.vimo.cam/upload/videos/2021/05/zTyS8wUcqC7H2C7WZWaf_26_801b9cb6b23ac04dd61121347ef642f8_video.mp4", desc: "Drama, Animation", year: "2023", quality: "4K", badge: "", isPaid: true },
    { id: "p3", title: "Qutb Ekspressi", img: "https://files.itv.uz/uploads/content/poster/2024/09/27/480cd1313aa7dc6e42d3570be4174285-q-700x1002.jpeg", url: "", desc: "Drama, Animation", year: "2023", quality: "4K", badge: "Multifilm" },
    { id: "p4", title: "Qutb Ekspressi 2", img: "https://hdkinolar.org/uploads/posts/2021-06/1624281380-1611022427.jpg", url: "", desc: "Drama, Animation, Jangari", year: "2023", quality: "4K", badge: "Multifilm" },
    { id: "p5", title: "O'sha yangi yil", img: "https://cdn.splay.uz/media/contents_meta/to-rozhdestvo/images/poster_h.resized.jpg", url: "https://vimo.cam/upload/videos/2025/03/hsI5roHBFcFaLMC6ekrE_15_7cb9cd336901f55ad69509db9743e8a8_video_240p_converted.mp4", desc: "Drama, Animation, Jangari", year: "2023", quality: "4K", badge: "Multifilm" }
];

let favorites = [];
let section = 'home';
let focus = { area: 'sidebar', index: 0 };
let playerFocus = 1;
let heroIndex = 0;
let heroInterval;

// TV Player state
let tvFocus = { area: 'controls', index: 0 };
let currentChannelIndex = 0;
let isFullscreen = false;

// Carousel uchun kinolar
const heroMovies = [
    movies.find(m => m.id === 'ny1'),
    movies.find(m => m.id === 'ny2'),
    movies.find(m => m.id === 'p2'),
    movies.find(m => m.id === 'ny3')
].filter(Boolean);

const $ = id => document.getElementById(id);
const video = $('video');
const sidebar = $('sidebar');

// Init
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    updateClock();
    setInterval(updateClock, 1000);
    render();
    initHeroCarousel();
    setupKeyboard();
    updateFocus();
});

// Hero Carousel
function initHeroCarousel() {
    renderHeroSlide();
    renderHeroDots();
    startHeroAutoplay();
}

function renderHeroSlide() {
    const m = heroMovies[heroIndex];
    if (!m) return;
    $('hero-slide').innerHTML = `
        <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('${m.img}')"></div>
        <div class="absolute inset-0 bg-gradient-to-r from-dark-900 via-dark-900/70 to-transparent"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent"></div>
        <div class="absolute bottom-16 left-10 max-w-xl">
            ${m.badge ? `<span class="inline-block px-3 py-1 bg-purple-500 text-sm font-bold rounded mb-4">${m.badge}</span>` : ''}
            <h1 class="text-4xl font-bold mb-3">${m.title}</h1>
            <p class="text-white/70 mb-4">${m.desc} • ${m.year} • ${m.quality || 'HD'}</p>
            <button class="hero-play-btn px-6 py-3 bg-purple-500 rounded-lg font-semibold flex items-center gap-2 transition hover:bg-purple-600" data-id="${m.id}">
                <i data-lucide="play" class="w-5 h-5"></i> Tomosha qilish
            </button>
        </div>
    `;
    lucide.createIcons();
    const btn = document.querySelector('.hero-play-btn');
    if (btn) btn.onclick = () => play('movie', btn.dataset.id);
}

function renderHeroDots() {
    $('hero-dots').innerHTML = heroMovies.map((_, i) => `
        <button class="w-2 h-2 rounded-full transition-all ${i === heroIndex ? 'bg-purple-500 w-6' : 'bg-white/30'}" data-hero="${i}"></button>
    `).join('');
    document.querySelectorAll('[data-hero]').forEach(dot => {
        dot.onclick = () => {
            heroIndex = +dot.dataset.hero;
            renderHeroSlide();
            renderHeroDots();
            resetHeroAutoplay();
        };
    });
}

function heroNext() {
    heroIndex = (heroIndex + 1) % heroMovies.length;
    renderHeroSlide();
    renderHeroDots();
    resetHeroAutoplay();
}

function heroPrev() {
    heroIndex = (heroIndex - 1 + heroMovies.length) % heroMovies.length;
    renderHeroSlide();
    renderHeroDots();
    resetHeroAutoplay();
}

function startHeroAutoplay() {
    heroInterval = setInterval(() => {
        heroIndex = (heroIndex + 1) % heroMovies.length;
        renderHeroSlide();
        renderHeroDots();
    }, 6000);
}

function resetHeroAutoplay() {
    clearInterval(heroInterval);
    startHeroAutoplay();
}

function updateClock() {
    const now = new Date();
    $('clock').textContent = now.toLocaleTimeString('uz', { hour: '2-digit', minute: '2-digit' });
    $('date').textContent = now.toLocaleDateString('uz', { weekday: 'short', day: 'numeric', month: 'short' });
}

// Kanallar page da ko'rsatiladigan 10 ta kanal
const displayChannels = [
    channels.find(ch => ch.name === "Zo'r"),
    channels.find(ch => ch.name === "BIZ Cinema"),
    channels.find(ch => ch.name === "MY5"),
    channels.find(ch => ch.name === "BIZ Music"),
    channels.find(ch => ch.name === "1 канал"),
    channels.find(ch => ch.name === "Milliy"),
    channels.find(ch => ch.name === "Navo"),
    channels.find(ch => ch.name === "O'zbekiston"),
    channels.find(ch => ch.name === "Sevimli"),
    channels.find(ch => ch.name === "BIZ TV")
].filter(Boolean);

// Har bir kanal uchun maxsus o'lcham - custom grid layout
const channelSizes = {
    "Zo'r": "ch-zor",
    "BIZ Cinema": "ch-cinema",
    "MY5": "ch-my5",
    "BIZ Music": "ch-music",
    "1 канал": "ch-1kanal",
    "O'zbekiston": "ch-uzb",
    "Milliy": "ch-milliy",
    "Navo": "ch-navo",
    "Sevimli": "ch-sevimli",
    "BIZ TV": "ch-biztv"
};

function render() {
    $('featured-row').innerHTML = [...channels.slice(0, 3), ...movies.slice(0, 2)].map((item, i) => card(item, i)).join('');
    $('continue-row').innerHTML = movies.slice(0, 5).map((item, i) => card(item, i + 5)).join('');
    $('channels-grid').innerHTML = displayChannels.map((ch, i) => channelCard(ch, i)).join('');
    $('movies-grid').innerHTML = movies.map((m, i) => movieCard(m, i)).join('');
    $('favorites-grid').innerHTML = favorites.length 
        ? favorites.map((f, i) => card(f, i)).join('') 
        : '<p class="text-white/40 col-span-full text-center py-20 text-xl">Sevimlilar bo\'sh</p>';
    $('settings-list').innerHTML = settingsHTML();
    lucide.createIcons();
}

function card(item, i) {
    const isChannel = !item.year;
    if (isChannel) {
        return `
            <div class="content-card relative bg-white rounded-xl overflow-hidden transition-all duration-200 border-2 border-transparent" data-i="${i}" data-type="channel" data-id="${item.id}">
                <div class="p-4 flex items-center justify-center bg-white h-24">
                    <img src="${item.logo}" class="max-h-12 max-w-full object-contain" alt="${item.name}">
                </div>
                <div class="p-2 bg-dark-700 text-center">
                    <h3 class="font-semibold text-sm truncate">${item.name}</h3>
                    <span class="text-xs text-red-400 flex items-center justify-center gap-1"><span class="w-1.5 h-1.5 bg-red-500 rounded-full"></span>LIVE</span>
                </div>
            </div>
        `;
    }
    return `
        <div class="content-card relative bg-dark-700/50 rounded-xl overflow-hidden transition-all duration-200 border-2 border-transparent" data-i="${i}" data-type="movie" data-id="${item.id}">
            <div class="relative aspect-video bg-dark-800">
                <img src="${item.img}" class="w-full h-full object-cover" alt="" onerror="this.src='https://picsum.photos/seed/${item.id}/400/225'">
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div class="absolute bottom-3 left-3 right-3">
                    <h3 class="font-semibold truncate">${item.title}</h3>
                    <p class="text-xs text-white/60">${item.desc}</p>
                </div>
                ${item.badge ? `<span class="absolute top-2 left-2 px-2 py-0.5 bg-purple-500 text-xs font-bold rounded">${item.badge}</span>` : ''}
            </div>
        </div>
    `;
}

function channelCard(ch, i) {
    if (!ch) return '';
    
    // Maxsus o'lcham olish
    const sizeClass = channelSizes[ch.name] || '';
    
    return `
        <div class="content-card relative bg-white/5 ${sizeClass} rounded-2xl overflow-hidden transition-all duration-200 border border-white/10 hover:border-white/40 hover:bg-white/10" data-i="${i}" data-type="channel" data-id="${ch.id}">
            <div class="p-6 flex items-center justify-center h-full">
                <img src="${ch.logo}" class="max-h-20 max-w-[80%] object-contain" alt="${ch.name}" onerror="this.src='https://via.placeholder.com/200x100?text=${ch.name}'">
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-3 bg-black/40">
                <h3 class="font-medium text-sm text-center text-white/90">${ch.name}</h3>
                <div class="flex items-center justify-center gap-1.5 mt-1">
                    <span class="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                    <span class="text-xs text-white/60">LIVE</span>
                </div>
            </div>
        </div>
    `;
}

function movieCard(m, i) {
    return `
        <div class="content-card relative bg-dark-700/50 rounded-xl overflow-hidden transition-all duration-200 border-2 border-transparent" data-i="${i}" data-type="movie" data-id="${m.id}">
            <div class="relative aspect-video bg-dark-800">
                <img src="${m.img}" class="w-full h-full object-cover" alt="" onerror="this.src='https://picsum.photos/seed/${m.id}/400/225'">
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                ${m.badge ? `<span class="absolute top-2 left-2 px-2 py-0.5 bg-purple-500 text-xs font-bold rounded">${m.badge}</span>` : ''}
                ${m.quality ? `<span class="absolute top-2 right-2 px-2 py-0.5 bg-black/60 text-xs rounded">${m.quality}</span>` : ''}
                ${m.isPaid ? '<span class="absolute bottom-2 right-2 px-2 py-0.5 bg-yellow-500 text-black text-xs font-bold rounded">PULLIK</span>' : ''}
            </div>
            <div class="p-3">
                <h3 class="font-semibold truncate">${m.title}</h3>
                <p class="text-xs text-white/50">${m.desc} • ${m.year}</p>
            </div>
        </div>
    `;
}

function settingsHTML() {
    const items = [
        { icon: 'globe', label: 'Til', value: "O'zbekcha" },
        { icon: 'monitor', label: 'Sifat', value: 'Auto (1080p)' },
        { icon: 'bell', label: 'Bildirishnomalar', value: 'Yoqilgan' },
        { icon: 'info', label: 'Versiya', value: '1.0.0' }
    ];
    return items.map((s, i) => `
        <div class="setting-item flex items-center justify-between p-5 bg-dark-700/50 rounded-xl border-2 border-transparent transition-all" data-i="${i}">
            <div class="flex items-center gap-4">
                <i data-lucide="${s.icon}" class="w-6 h-6 text-purple-400"></i>
                <span class="text-lg">${s.label}</span>
            </div>
            <span class="text-white/50">${s.value}</span>
        </div>
    `).join('');
}

function updateSidebar() {
    if (focus.area === 'sidebar') {
        sidebar.classList.add('expanded');
    } else {
        sidebar.classList.remove('expanded');
    }
}

function showSection(id) {
    document.querySelectorAll('.section').forEach(s => s.classList.add('hidden'));
    $(id)?.classList.remove('hidden');
    section = id;
    focus = { area: 'content', index: 0 };
    updateSidebar();
    updateFocus();
}

function updateFocus() {
    document.querySelectorAll('.card-focus, .focused').forEach(el => {
        el.classList.remove('card-focus', 'focused');
    });
    document.querySelectorAll('.nav-item').forEach(el => {
        el.classList.remove('focused', 'text-white');
        el.classList.add('text-white/50');
    });
    document.querySelectorAll('.player-btn').forEach(el => el.classList.remove('ring-4', 'ring-white'));
    
    const carousel = $('hero-carousel');
    if (carousel) {
        carousel.classList.remove('ring-2', 'ring-purple-500');
        if (focus.area === 'carousel') {
            carousel.classList.add('ring-2', 'ring-purple-500');
        }
    }
    
    updateSidebar();
    
    if (!$('player').classList.contains('hidden')) {
        const btns = [$('rew'), $('playpause'), $('fwd')];
        btns[playerFocus]?.classList.add('ring-4', 'ring-white');
        return;
    }
    
    if (focus.area === 'sidebar') {
        const navs = document.querySelectorAll('.nav-item');
        const nav = navs[focus.index];
        if (nav) {
            nav.classList.add('focused', 'text-white');
            nav.classList.remove('text-white/50');
        }
    } else if (focus.area === 'content') {
        const cards = document.querySelectorAll(`#${section} .content-card, #${section} .setting-item`);
        const card = cards[focus.index];
        if (card) {
            card.classList.add('card-focus');
            card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
        }
    }
}

function navigate(dir) {
    if (!$('player').classList.contains('hidden')) {
        if (dir === 'left') playerFocus = Math.max(0, playerFocus - 1);
        if (dir === 'right') playerFocus = Math.min(2, playerFocus + 1);
        showPlayerUI();
        updateFocus();
        return;
    }

    if (section === 'home' && focus.area === 'carousel') {
        if (dir === 'left') heroPrev();
        if (dir === 'right') heroNext();
        if (dir === 'down') { focus.area = 'content'; focus.index = 0; updateFocus(); }
        return;
    }

    const navs = document.querySelectorAll('.nav-item');
    const cards = document.querySelectorAll(`#${section} .content-card, #${section} .setting-item`);
    const count = cards.length;
    
    if (focus.area === 'sidebar') {
        if (dir === 'up') focus.index = Math.max(0, focus.index - 1);
        if (dir === 'down') focus.index = Math.min(navs.length - 1, focus.index + 1);
        if (dir === 'right') {
            if (section === 'home') {
                focus.area = 'carousel';
            } else if (count > 0) {
                focus.area = 'content';
                focus.index = 0;
            }
        }
    } else {
        // Custom grid navigation - elementlarning haqiqiy pozitsiyasiga qarab
        if (section === 'channels') {
            navigateCustomGrid(dir, cards, navs);
        } else {
            // Oddiy grid navigatsiya (boshqa sahifalar uchun)
            const cols = 5;
            if (dir === 'left') {
                if (focus.index === 0) { 
                    focus.area = 'sidebar'; 
                    focus.index = Array.from(navs).findIndex(n => n.dataset.section === section);
                    if (focus.index < 0) focus.index = 0;
                } else {
                    focus.index = Math.max(0, focus.index - 1);
                }
            }
            if (dir === 'right') {
                focus.index = Math.min(count - 1, focus.index + 1);
            }
            if (dir === 'up') {
                if (section === 'home' && focus.index < cols) {
                    focus.area = 'carousel';
                } else {
                    focus.index = Math.max(0, focus.index - cols);
                }
            }
            if (dir === 'down') focus.index = Math.min(count - 1, focus.index + cols);
        }
    }
    updateFocus();
}

// Custom grid uchun navigatsiya
function navigateCustomGrid(dir, cards, navs) {
    const currentCard = cards[focus.index];
    if (!currentCard) return;
    
    const currentRect = currentCard.getBoundingClientRect();
    const currentCenterX = currentRect.left + currentRect.width / 2;
    const currentCenterY = currentRect.top + currentRect.height / 2;
    const currentTop = currentRect.top;
    const currentBottom = currentRect.bottom;
    const currentLeft = currentRect.left;
    const currentRight = currentRect.right;
    
    let bestIndex = -1;
    let bestScore = Infinity;
    
    if (dir === 'left') {
        let foundLeft = false;
        for (let i = 0; i < cards.length; i++) {
            if (i === focus.index) continue;
            const rect = cards[i].getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            
            // Faqat chapda bo'lgan elementlar
            if (rect.right < currentLeft + 10) {
                // Vertikal overlap bormi?
                const overlapTop = Math.max(currentTop, rect.top);
                const overlapBottom = Math.min(currentBottom, rect.bottom);
                const hasOverlap = overlapBottom > overlapTop;
                
                // Gorizontal masofa
                const horizontalDist = currentLeft - rect.right;
                
                // Vertikal masofa (overlap bo'lsa 0)
                let verticalDist = 0;
                if (!hasOverlap) {
                    const centerY = rect.top + rect.height / 2;
                    verticalDist = Math.abs(centerY - currentCenterY);
                }
                
                // Score: gorizontal masofa + vertikal masofa * 3 (vertikal muhimroq)
                const score = horizontalDist + verticalDist * 3;
                
                if (score < bestScore) {
                    bestScore = score;
                    bestIndex = i;
                    foundLeft = true;
                }
            }
        }
        if (!foundLeft) {
            focus.area = 'sidebar';
            focus.index = Array.from(navs).findIndex(n => n.dataset.section === section);
            if (focus.index < 0) focus.index = 0;
            return;
        }
    } else if (dir === 'right') {
        for (let i = 0; i < cards.length; i++) {
            if (i === focus.index) continue;
            const rect = cards[i].getBoundingClientRect();
            
            // Faqat o'ngda bo'lgan elementlar
            if (rect.left > currentRight - 10) {
                // Vertikal overlap bormi?
                const overlapTop = Math.max(currentTop, rect.top);
                const overlapBottom = Math.min(currentBottom, rect.bottom);
                const hasOverlap = overlapBottom > overlapTop;
                
                // Gorizontal masofa
                const horizontalDist = rect.left - currentRight;
                
                // Vertikal masofa (overlap bo'lsa 0)
                let verticalDist = 0;
                if (!hasOverlap) {
                    const centerY = rect.top + rect.height / 2;
                    verticalDist = Math.abs(centerY - currentCenterY);
                }
                
                // Score: gorizontal masofa + vertikal masofa * 3
                const score = horizontalDist + verticalDist * 3;
                
                if (score < bestScore) {
                    bestScore = score;
                    bestIndex = i;
                }
            }
        }
    } else if (dir === 'up') {
        for (let i = 0; i < cards.length; i++) {
            if (i === focus.index) continue;
            const rect = cards[i].getBoundingClientRect();
            
            // Faqat yuqorida bo'lgan elementlar
            if (rect.bottom < currentTop + 10) {
                // Gorizontal overlap bormi?
                const overlapLeft = Math.max(currentLeft, rect.left);
                const overlapRight = Math.min(currentRight, rect.right);
                const hasOverlap = overlapRight > overlapLeft;
                
                // Vertikal masofa
                const verticalDist = currentTop - rect.bottom;
                
                // Gorizontal masofa (overlap bo'lsa 0)
                let horizontalDist = 0;
                if (!hasOverlap) {
                    const centerX = rect.left + rect.width / 2;
                    horizontalDist = Math.abs(centerX - currentCenterX);
                }
                
                // Score: vertikal masofa + gorizontal masofa * 3
                const score = verticalDist + horizontalDist * 3;
                
                if (score < bestScore) {
                    bestScore = score;
                    bestIndex = i;
                }
            }
        }
    } else if (dir === 'down') {
        for (let i = 0; i < cards.length; i++) {
            if (i === focus.index) continue;
            const rect = cards[i].getBoundingClientRect();
            
            // Faqat pastda bo'lgan elementlar
            if (rect.top > currentBottom - 10) {
                // Gorizontal overlap bormi?
                const overlapLeft = Math.max(currentLeft, rect.left);
                const overlapRight = Math.min(currentRight, rect.right);
                const hasOverlap = overlapRight > overlapLeft;
                
                // Vertikal masofa
                const verticalDist = rect.top - currentBottom;
                
                // Gorizontal masofa (overlap bo'lsa 0)
                let horizontalDist = 0;
                if (!hasOverlap) {
                    const centerX = rect.left + rect.width / 2;
                    horizontalDist = Math.abs(centerX - currentCenterX);
                }
                
                // Score: vertikal masofa + gorizontal masofa * 3
                const score = verticalDist + horizontalDist * 3;
                
                if (score < bestScore) {
                    bestScore = score;
                    bestIndex = i;
                }
            }
        }
    }
    
    if (bestIndex !== -1) {
        focus.index = bestIndex;
    }
}

function select() {
    if (!$('player').classList.contains('hidden')) {
        if (playerFocus === 0) { video.currentTime -= 10; showPlayerUI(); }
        if (playerFocus === 1) togglePlay();
        if (playerFocus === 2) { video.currentTime += 10; showPlayerUI(); }
        return;
    }
    
    if (focus.area === 'carousel') {
        const m = heroMovies[heroIndex];
        if (m) play('movie', m.id);
        return;
    }
    
    if (focus.area === 'sidebar') {
        const nav = document.querySelectorAll('.nav-item')[focus.index];
        if (nav) showSection(nav.dataset.section);
    } else {
        const card = document.querySelectorAll(`#${section} .content-card`)[focus.index];
        if (card) play(card.dataset.type, card.dataset.id);
    }
}

// Player (Kino uchun)
function play(type, id) {
    if (type === 'channel') {
        playChannel(id);
        return;
    }
    
    const item = movies.find(m => m.id === id || m.id === String(id));
    if (!item) return;
    
    $('player-title').textContent = item.title;
    $('player-desc').textContent = (item.desc || '') + ` • ${item.year}` + (item.quality ? ` • ${item.quality}` : '');
    $('player').classList.remove('hidden');
    playerFocus = 1;
    
    if (item.url) {
        video.src = item.url;
        video.play().catch(() => {});
        $('play-icon').setAttribute('data-lucide', 'pause');
    }
    lucide.createIcons();
    showPlayerUI();
    updateFocus();
}

// TV Player (Kanallar uchun)
function playChannel(id) {
    const idx = channels.findIndex(c => c.id === id || c.id === String(id));
    if (idx === -1) return;
    
    currentChannelIndex = idx;
    const ch = channels[idx];
    
    $('tv-channel-name').textContent = ch.name;
    $('tv-channel-desc').textContent = ch.desc + (ch.quality ? ` • ${ch.quality}` : '');
    $('tv-channel-logo').src = ch.logo;
    
    renderTvChannelsList();
    
    const tvVideo = $('tv-video');
    if (ch.url) {
        tvVideo.src = ch.url;
        tvVideo.play().catch(() => {});
        $('tv-play-icon').setAttribute('data-lucide', 'pause');
    }
    
    $('tv-player').classList.remove('hidden');
    tvFocus = { area: 'controls', index: 0 };
    
    updateTvTime();
    lucide.createIcons();
    showTvOverlay();
    updateTvFocus();
}

function renderTvChannelsList() {
    // TV player ichida hamma kanallar ko'rsatiladi
    $('tv-channels-list').innerHTML = channels.map((ch, i) => `
        <div class="tv-channel-item flex items-center gap-3 p-3 rounded-lg cursor-pointer transition ${i === currentChannelIndex ? 'bg-purple-500/30 border border-purple-500' : 'hover:bg-white/10 border border-transparent'}" data-ch-index="${i}">
            <div class="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-1 flex-shrink-0">
                <img src="${ch.logo}" class="max-w-full max-h-full object-contain" alt="" onerror="this.src='https://via.placeholder.com/48?text=${ch.name[0]}'">
            </div>
            <div class="flex-1 min-w-0">
                <h4 class="font-semibold text-sm truncate">${ch.name}</h4>
                <p class="text-xs text-white/50 flex items-center gap-1">
                    <span class="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                    ${ch.desc}
                </p>
            </div>
        </div>
    `).join('');
}

function updateTvTime() {
    const now = new Date();
    const tvTime = $('tv-time');
    if (tvTime) {
        tvTime.textContent = now.toLocaleTimeString('uz', { hour: '2-digit', minute: '2-digit' });
    }
}

let tvOverlayTimeout;
function showTvOverlay() {
    $('tv-overlay').style.opacity = '1';
    clearTimeout(tvOverlayTimeout);
    tvOverlayTimeout = setTimeout(() => {
        if (!$('tv-video').paused && tvFocus.area === 'controls') {
            $('tv-overlay').style.opacity = '0';
        }
    }, 4000);
}

function updateTvFocus() {
    document.querySelectorAll('.tv-btn').forEach(el => el.classList.remove('ring-4', 'ring-white'));
    document.querySelectorAll('.tv-channel-item').forEach(el => el.classList.remove('ring-2', 'ring-purple-400'));
    
    if (tvFocus.area === 'controls') {
        const btns = [$('tv-playpause'), $('tv-fullscreen')];
        btns[tvFocus.index]?.classList.add('ring-4', 'ring-white');
    } else if (tvFocus.area === 'channels') {
        const items = document.querySelectorAll('.tv-channel-item');
        items[tvFocus.index]?.classList.add('ring-2', 'ring-purple-400');
        items[tvFocus.index]?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

function navigateTv(dir) {
    showTvOverlay();
    
    if (tvFocus.area === 'controls') {
        if (dir === 'left') tvFocus.index = Math.max(0, tvFocus.index - 1);
        if (dir === 'right') {
            if (tvFocus.index < 1) {
                tvFocus.index++;
            } else {
                tvFocus = { area: 'channels', index: currentChannelIndex };
            }
        }
        if (dir === 'up' || dir === 'down') {
            if (dir === 'up') currentChannelIndex = Math.max(0, currentChannelIndex - 1);
            if (dir === 'down') currentChannelIndex = Math.min(channels.length - 1, currentChannelIndex + 1);
            switchChannel(currentChannelIndex);
        }
    } else if (tvFocus.area === 'channels') {
        if (dir === 'left') tvFocus = { area: 'controls', index: 1 };
        if (dir === 'up') tvFocus.index = Math.max(0, tvFocus.index - 1);
        if (dir === 'down') tvFocus.index = Math.min(channels.length - 1, tvFocus.index + 1);
    }
    
    updateTvFocus();
}

function selectTv() {
    showTvOverlay();
    
    if (tvFocus.area === 'controls') {
        if (tvFocus.index === 0) toggleTvPlay();
        if (tvFocus.index === 1) toggleTvFullscreen();
    } else if (tvFocus.area === 'channels') {
        switchChannel(tvFocus.index);
    }
}

function switchChannel(index) {
    currentChannelIndex = index;
    const ch = channels[index];
    
    $('tv-channel-name').textContent = ch.name;
    $('tv-channel-desc').textContent = ch.desc + (ch.quality ? ` • ${ch.quality}` : '');
    $('tv-channel-logo').src = ch.logo;
    
    const tvVideo = $('tv-video');
    if (ch.url) {
        tvVideo.src = ch.url;
        tvVideo.play().catch(() => {});
        $('tv-play-icon').setAttribute('data-lucide', 'pause');
    }
    
    renderTvChannelsList();
    lucide.createIcons();
}

function toggleTvPlay() {
    const tvVideo = $('tv-video');
    if (tvVideo.paused) {
        tvVideo.play();
        $('tv-play-icon').setAttribute('data-lucide', 'pause');
    } else {
        tvVideo.pause();
        $('tv-play-icon').setAttribute('data-lucide', 'play');
    }
    lucide.createIcons();
}

function toggleTvFullscreen() {
    const panel = $('tv-channels-panel');
    
    if (!isFullscreen) {
        panel.classList.add('hidden');
        isFullscreen = true;
        $('tv-fs-icon').setAttribute('data-lucide', 'minimize');
    } else {
        panel.classList.remove('hidden');
        isFullscreen = false;
        $('tv-fs-icon').setAttribute('data-lucide', 'maximize');
    }
    lucide.createIcons();
}

function closeTvPlayer() {
    const tvVideo = $('tv-video');
    tvVideo.pause();
    tvVideo.src = '';
    $('tv-player').classList.add('hidden');
    isFullscreen = false;
    $('tv-fs-icon')?.setAttribute('data-lucide', 'maximize');
    lucide.createIcons();
    updateFocus();
}

function closePlayer() {
    video.pause();
    video.src = '';
    $('player').classList.add('hidden');
    $('play-icon').setAttribute('data-lucide', 'play');
    lucide.createIcons();
    updateFocus();
}

function togglePlay() {
    if (video.paused) {
        video.play();
        $('play-icon').setAttribute('data-lucide', 'pause');
    } else {
        video.pause();
        $('play-icon').setAttribute('data-lucide', 'play');
    }
    lucide.createIcons();
    showPlayerUI();
    updateFocus();
}

let hideUITimeout;
function showPlayerUI() {
    $('player-ui').style.opacity = '1';
    clearTimeout(hideUITimeout);
    hideUITimeout = setTimeout(() => {
        if (!video.paused) $('player-ui').style.opacity = '0';
    }, 4000);
}

video.addEventListener('timeupdate', () => {
    const pct = (video.currentTime / video.duration * 100) || 0;
    $('progress').style.width = pct + '%';
    $('time-current').textContent = formatTime(video.currentTime);
    $('time-total').textContent = formatTime(video.duration);
});

function formatTime(s) {
    if (!s || isNaN(s)) return '0:00';
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, '0')}`;
}

// Keyboard (TV Remote)
function setupKeyboard() {
    document.addEventListener('keydown', e => {
        e.preventDefault();
        
        // TV Player ochiq bo'lsa
        if (!$('tv-player').classList.contains('hidden')) {
            switch(e.key) {
                case 'ArrowUp': navigateTv('up'); break;
                case 'ArrowDown': navigateTv('down'); break;
                case 'ArrowLeft': navigateTv('left'); break;
                case 'ArrowRight': navigateTv('right'); break;
                case 'Enter': selectTv(); break;
                case ' ': toggleTvPlay(); break;
                case 'Escape':
                case 'Backspace': closeTvPlayer(); break;
            }
            return;
        }
        
        // Movie Player ochiq bo'lsa
        if (!$('player').classList.contains('hidden')) {
            switch(e.key) {
                case 'ArrowLeft': playerFocus = Math.max(0, playerFocus - 1); break;
                case 'ArrowRight': playerFocus = Math.min(2, playerFocus + 1); break;
                case 'Enter': 
                    if (playerFocus === 0) video.currentTime -= 10;
                    if (playerFocus === 1) togglePlay();
                    if (playerFocus === 2) video.currentTime += 10;
                    break;
                case ' ': togglePlay(); break;
                case 'Escape':
                case 'Backspace': closePlayer(); break;
            }
            showPlayerUI();
            updateFocus();
            return;
        }
        
        // Asosiy navigatsiya
        switch(e.key) {
            case 'ArrowUp': navigate('up'); break;
            case 'ArrowDown': navigate('down'); break;
            case 'ArrowLeft': navigate('left'); break;
            case 'ArrowRight': navigate('right'); break;
            case 'Enter': select(); break;
            case 'Escape': 
            case 'Backspace': 
                if (focus.area === 'content' || focus.area === 'carousel') {
                    focus.area = 'sidebar';
                    focus.index = 0;
                    updateFocus();
                }
                break;
        }
    });
}

// API
window.addChannel = data => { 
    channels.push({ id: Date.now(), img: 'https://picsum.photos/seed/' + Date.now() + '/400/225', ...data }); 
    render(); 
};
window.addMovie = data => { 
    movies.push({ id: Date.now(), img: 'https://picsum.photos/seed/' + Date.now() + '/400/225', ...data }); 
    render(); 
};
