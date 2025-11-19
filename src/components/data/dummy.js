//lol fotos de los jugadores
import LolTopLanePhoto from '@assets/players_lol/toplane.jpg';
import LolJunglePhoto from '@assets/players_lol/jungle.jpg';
import LolMidLanePhoto from '@assets/players_lol/midlane.jpg';
import LolADCPhoto from '@assets/players_lol/adc.jpg';
import LolSupportPhoto from '@assets/players_lol/support.jpg';
//pokemon fotos de los jugadores
import PokemonTrainerPhoto from '@assets/players_pokemon/pokemon1.jpg'; 
import PokemonTGCPhoto from '@assets/players_pokemon/pokemon2.jpg'; 
//imagenes de las noticias
import News1 from '@assets/news/news1.jpg'; 
import News2 from '@assets/news/news2.jpg'; 
import News3 from '@assets/news/news3.jpg'; 
import News4 from '@assets/news/news4.jpg'; 
import News5 from '@assets/news/news5.jpg'; 
import News6 from '@assets/news/news6.jpg'; 
import News7 from '@assets/news/news7.jpg';
//imagenes de la tienda
import JerseyV3 from '@assets/shop/pipoi.png';


// shop info
export const SHOP_ITEMS = [
    { id: 1, name: "NARIZ DE PIPI", price: "$10.000", imageUrl: JerseyV3, purchaseUrl: "https://www.tu-tienda-online.com/jersey-v3" },
    { id: 2, name: "NARIZ DE PIPI", price: "$90.000", imageUrl: JerseyV3, purchaseUrl: "https://www.tu-tienda-online.com/jersey-v3" },
    { id: 3, name: "NARIZ DE PIPI", price: "$60.000", imageUrl: JerseyV3, purchaseUrl: "https://www.tu-tienda-online.com/jersey-v3" },
    { id: 4, name: "NARIZ DE PIPI", price: "410.000", imageUrl: JerseyV3, purchaseUrl: "https://www.tu-tienda-online.com/jersey-v3" },
    { id: 5, name: "NARIZ DE PIPI", price: "120.000", imageUrl: JerseyV3, purchaseUrl: "https://www.tu-tienda-online.com/jersey-v3" },
 
];

//noticias   // si hay video usar videoUrl, si no hay video no usarlo // solo soporta links embed de youtube, para crear un embed hay que clickear compartir y copiar el url
export const DUMMY_NEWS = [
    { 
        id: 1,
        title: 'VOLTICONS Campeones de la E-Copa!',
        summary: 'Victoria épica en el torneo de League of Legends en un emocionante 3-2.',
        date: '10 Nov 2025',
        imageUrl: News1,
        fullContent: 'ATUTUPE PAPAYAATUPERA LA PAPAYAATUPERA LA PAPAYAATUPERA LA PAPAYAATUPERA LA PAPAYAATUPERA LA PAPAYAATUPERA LA PAPAYAATUPERA LA PAPAYAATUPERA LA PAPAYAATUPERA LA PAPAYAATUPERA LA PAPAYAATUPERA LA PAPAYAATUPERA LA PAPAYAATUPERA LA PAPAYAATUPERA LA PAPAYAATUPERA LA PAPAYAATUPERA LA PAPAYAATUPERA LA PAPAYAATUPERA LA PAPAYAATUPERA LA PAPAYAATUPERA LA PAPAYAATUPERA LA PAPAYAATUPERA LA PAPAYAATUPERA LA PAPAYAATUPERA LA PAPAYAATUPERA LA PAPAYAATUPERA LA PAPAYA',
        videoUrl: "https://www.youtube.com/embed/hL7dgAmyot0" 
    }, 
    { 
        id: 2,
        title: 'Fichaje estelar: "Thunder" se une a Pokémon',
        summary: 'Anunciamos a nuestro nuevo jugador en la escena VGC competitiva.',
        date: '05 Nov 2025',
        imageUrl: News2,
        fullContent: 'ATUTUPE PAP',
        videoUrl: "https://www.youtube.com/embed/segunda_url_video2"
    }, 
    { 
        id: 3,
        title: 'Lanzamiento de la nueva Jersey "V2"',
        summary: 'Ya disponible en la tienda la camiseta oficial de la temporada.',
        date: '01 Nov 2025',
        imageUrl: News3,
        fullContent: 'ATUTUPE PAP',
        videoUrl: "https://www.youtube.com/embed/primera_url_video3"
    }, 
    { 
        id: 4,
        title: 'MURIÓ JESUS',
        summary: 'Su funeral será el día 18/11/2025.',
        date: '11 Nov 2025',
        imageUrl: News4,
        fullContent: 'ATUTUPE PAP',
    },
    { 
        id: 5,
        title: 'ASESINARON A JOELBEBO',
        summary: 'Su funeral será el día 18/11/2025.',
        date: '19 Nov 2025',
        imageUrl: News5,
        fullContent: 'negro gil',
        videoUrl: 'https://www.youtube.com/embed/_YVf3lnIdGY?si=yN3RZ8gvtVJ_iL8n'
    },
    { 
        id: 6,
        title: 'ASESINARON AL NEGROKEVIN',
        summary: 'Su funeral será el día 18/11/2025.',
        date: '11 Nov 2025', 
        imageUrl: News6,
        fullContent: 'Perdi mis lp',
        videoUrl: "https://www.youtube.com/embed/video_negro_kevin"
    },
    { 
        id: 7,
        title: 'ASESINARON A CAMILONICOLAU',
        summary: 'Su funeral será el día 18/11/2025.',
        date: '11 Nov 2025',
        imageUrl: News7,
        fullContent: 'no se que poner',
        videoUrl: "https://www.youtube.com/embed/video_camilo" 
    },
];

// info de los players // ids 1-10 lol // 10-20 pokemon// 20+ cuando haya mas rosters
export const ROSTERS = {
    LoL: [
        { 
            id: 1,
             gamertag: 'Respeta',
              role: 'Top',
               socials: '@respetalol',
                photoUrl: LolTopLanePhoto,
            streamUrl: 'https://twitch.tv/respetalol',
            twitchLink: 'https://twitch.tv/respetalol',
            twitterLink: 'https://twitter.com/respetalol',
            instagramLink: 'https://instagram.com/respetalol', 
        },
        { 
            id: 2, gamertag: 'Martote',
             role: 'Jungle',
              socials: '@martoteee',
               photoUrl: LolJunglePhoto,
            streamUrl: 'https://twitch.tv/martoteee',
            twitchLink: 'https://twitch.tv/martoteee',
            twitterLink: 'https://twitter.com/martoteee',
            instagramLink: 'https://instagram.com/martoteee3',
        },
        { 
            id: 3, gamertag: 'Joelbebo',
             role: 'Mid',
              socials: '@joelbebo1',
               photoUrl: LolMidLanePhoto,
            streamUrl: 'https://twitch.tv/joelbebo1',
            twitterLink: 'https://twitter.com/joelbebo1',
            youtubeLink: 'https://youtube.com/joelbebo',
        },
        { 
            id: 4,
             gamertag: 'Askadan',
              role: 'ADC',
               socials: '@askadanlol',
                photoUrl: LolADCPhoto,
            streamUrl: 'https://twitch.tv/askadanlol',
            twitterLink: 'https://twitter.com/askadanlol',
        },
        { 
            id: 5,
             gamertag: 'Fer1',
              role: 'Support',
               socials: '@ferlol',
                photoUrl: LolSupportPhoto,
            streamUrl: 'https://twitch.tv/ferlol',
            twitterLink: 'https://twitter.com/ferlol',
        },
    ],
    Pokemon: [
        { 
            id: 11,
             gamertag: 'Walter',
              role: 'nose los cosos de pokemon',
               socials: '@PikaTrainer',
                photoUrl: PokemonTrainerPhoto,
            streamUrl: 'https://twitch.tv/PikaTrainer',
            twitterLink: 'https://twitter.com/PikaTrainer',
        },
        { 
            id: 12,
             gamertag: 'Lino',
              role: 'nose',
               socials: '@StaticCard',
                photoUrl: PokemonTGCPhoto,
            streamUrl: 'https://twitch.tv/StaticCard',
            twitterLink: 'https://twitter.com/StaticCard',
        },
    ],
};