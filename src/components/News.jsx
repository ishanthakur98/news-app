import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
     articles = [
        {
          "source": {
            "id": null,
            "name": "Rolling Stone"
          },
          "author": "Jodi Guglielmi",
          "title": "‘Euphoria’ Star Angus Cloud Cause of Death Revealed - Rolling Stone",
          "description": "Cloud’s family confirmed the actor’s death on July 31 at the age of 25",
          "url": "https://www.rollingstone.com/tv-movies/tv-movie-news/angus-cloud-cause-of-death-revealed-euphoria-star-1234798897/",
          "urlToImage": "https://www.rollingstone.com/wp-content/uploads/2023/08/GettyImages-1363008896.jpg?w=1600 &h =900 &crop =1",
          "publishedAt": "2023-09-21T16:15:39Z",
          "content": "Angus Cloud died of an accidental overdose, Rolling Stone has confirmed.\r\nAccording to the Alameda County Coroner’s Bureau, Cloud had fentanyl, cocaine, benzodiazepine, and methamphetamine in his sys… [+2638 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "CNET"
          },
          "author": null,
          "title": "How to Fix the Most Annoying iOS 17 Features on Your iPhone - CNET",
          "description": "You're not going to love every new feature on iOS 17.",
          "url": "https://www.cnet.com/tech/mobile/how-to-fix-the-most-annoying-ios-17-features-on-your-iphone/",
          "urlToImage": "https://www.cnet.com/a/img/resize/38eb575872004f4c895813222724bfdd6c9776e5/hub/2023/09/05/4673d5b0-c731-4bca-9ab0-41270384025f/20230904-145524.jpg?auto=webp &fit =crop &height =675 &width =1200",
          "publishedAt": "2023-09-21T15:30:00Z",
          "content": "Apple's iOS 17 software update is out and available for download to anyone with a supported iPhone. The latest iPhone OS has several new features, like interactive widgets, full-screen contact poster… [+4323 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "PEOPLE"
          },
          "author": "Angela Andaloro",
          "title": "Sophie Turner Sues Joe Jonas, Demands Kids Be Returned to England After Being 'Wrongfully Detained' amid Split - Yahoo Entertainment",
          "description": "The couple tied the knot after three years of dating in 2019",
          "url": "https://people.com/sophie-turner-sues-joe-jonas-demands-kids-be-returned-to-england-amid-split-7972708",
          "urlToImage": "https://s.yimg.com/ny/api/res/1.2/hJQ8cgdGHrDSJJj9hTyjLw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/people_218/6db39dd3eb44acad41971d0d2a6a9041",
          "publishedAt": "2023-09-21T15:29:54Z",
          "content": "The couple tied the knot after three years of dating in 2019\r\nKarwai Tang/WireImage; Jon Kopaloff/Getty\r\nSophie Turner is asking for her kids to be returned to England.\r\nIn a lawsuit filed in a Manha… [+3080 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "CNBC"
          },
          "author": "Jordan Novet",
          "title": "Microsoft to sell AI assistant software to biggest clients starting Nov. 1 - CNBC",
          "description": "Some small businesses have begun testing Microsoft 365 Copilot, which can help corporate workers compose documents and find information from email messages.",
          "url": "https://www.cnbc.com/2023/09/21/microsoft-365-copilot-software-becomes-available-to-enterprises-nov-1.html",
          "urlToImage": "https://image.cnbcfm.com/api/v1/image/103319272-20160120-3217-1936.jpg?v=1695309180 &w =1920 &h =1080",
          "publishedAt": "2023-09-21T15:13:00Z",
          "content": "Microsoft said Thursday that starting Nov. 1, large companies will be able to buy Microsoft 365 Copilot, its artificial intelligence supplement to core productivity apps such as Word and Excel.\r\nThe … [+2871 chars]"
        },
        {
          "source": {
            "id": "the-wall-street-journal",
            "name": "The Wall Street Journal"
          },
          "author": "Tripti Lahiri, Rajesh Roy",
          "title": "India Suspends Visas for Canadians as Rift Over Killing Deepens - The Wall Street Journal",
          "description": "Canadian Prime Minister Justin Trudeau has pressed New Delhi to cooperate with its investigation into the shooting of Hardeep Singh Nijjar",
          "url": "https://www.wsj.com/world/india/india-suspends-visas-for-canadians-as-rift-over-extrajudicial-killing-deepens-bdd21752",
          "urlToImage": "https://images.wsj.net/im-855569/social",
          "publishedAt": "2023-09-21T15:02:00Z",
          "content": null
        },
        {
          "source": {
            "id": "cnn",
            "name": "CNN"
          },
          "author": "Anna Bahney",
          "title": "Home prices continued to climb in August, even as sales dropped - CNN",
          "description": "Home prices continued to climb in August, even as home sales dropped, a result of the low inventory of homes for sale pushing prices up and stubbornly high mortgage rates keeping would-be buyers out of the market, according to a monthly report from the Nation…",
          "url": "https://www.cnn.com/2023/09/21/homes/existing-home-sales-august-2023/index.html",
          "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230921082600-existing-home-sales-restricted.jpg?c=16x9 &q =w_800,c_fill",
          "publishedAt": "2023-09-21T14:59:00Z",
          "content": "Home prices continued to climb in August, even as home sales dropped, a result of the low inventory of homes for sale pushing prices up and stubbornly high mortgage rates keeping would-be buyers out … [+1850 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "NBCSports.com"
          },
          "author": "Josh Alper",
          "title": "Vikings OC Wes Phillips: Cam Akers trade not a sign of lost confidence in Alexander Mattison - NBC Sports",
          "description": "One of the first questions to come to mind when the Vikings traded for running back Cam Akers was what the deal means for Minnesota's current starter.",
          "url": "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/vikings-oc-wes-phillips-cam-akers-trade-not-a-sign-of-lost-confidence-in-alexander-mattison",
          "urlToImage": "https://nbcsports.brightspotcdn.com/dims4/default/f31fa12/2147483647/strip/true/crop/6987x3930+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.amazonaws.com%2Fbrightspot%2F66%2F43%2F4d0cfe274c849c480edac04ed908%2Fhttps-delivery-gettyimages.com%2Fdownloads%2F1674995234",
          "publishedAt": "2023-09-21T14:56:54Z",
          "content": "One of the first questions to come to mind when the Vikings traded for running back Cam Akers was what the deal means for Minnesotas current starter. \r\nAlexander Mattison has 19 carries for 62 yards … [+736 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "NBC Chicago"
          },
          "author": "James Neveau, Alexandria Fisher, Matt Stefanski, Francie Swidler",
          "title": "What we know after suspect, person of interest in Romeoville killings dead after Oklahoma car crash - NBC Chicago",
          "description": "More details in the slaying of an Illinois family of four from the Chicago suburb of Romeoville unfolded Wednesday after police said two suspects in the case…",
          "url": "https://www.nbcchicago.com/news/local/romeoville-illinois-family-killed-update-police-oklahoma-suspects/3233191/",
          "urlToImage": "https://media.nbcchicago.com/2023/09/Romeoville_Candles.jpg?quality=85 &strip =all &resize =1200%2C675",
          "publishedAt": "2023-09-21T14:52:38Z",
          "content": "More details in the slaying of an Illinois family of four from Romeoville unfolded Wednesday after police said two suspects in the case were found shot -- one fatally -- following a fiery car crash a… [+4736 chars]"
        },
        {
          "source": {
            "id": "the-verge",
            "name": "The Verge"
          },
          "author": "David Pierce",
          "title": "Microsoft’s Surface Laptop Studio 2 has upgraded chips and ports - The Verge",
          "description": "The Surface Laptop Studio was one of Microsoft’s more interesting laptop designs, but the first version wasn’t powerful enough for the price. The new device has upgraded chips, new microSD and USB ports, and more.",
          "url": "https://www.theverge.com/2023/9/21/23878658/microsoft-surface-laptop-studio-2-price-release-date",
          "urlToImage": "https://cdn.vox-cdn.com/thumbor/gO8enwzrc0yHwEh5SYxteD5-hrg=/0x0:2000x1333/1200x628/filters:focal(1000x667:1001x668)/cdn.vox-cdn.com/uploads/chorus_asset/file/24940335/lcimg_7ebed5e9_bbd1_403c_96e7_1e185ea6a47f.jpeg",
          "publishedAt": "2023-09-21T14:52:25Z",
          "content": "Microsoft announces the Surface Laptop Studio 2 with upgraded chips and ports\r\nMicrosoft announces the Surface Laptop Studio 2 with upgraded chips and ports\r\n / Its one of Microsofts more interesting… [+3077 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Sports Illustrated"
          },
          "author": "Dan Lyons",
          "title": "Travis Kelce, Taylor Swift Are ‘Seeing Where Things Go,’ per Report - Sports Illustrated",
          "description": "A new report states that the tight end and pop star have hung out twice.",
          "url": "https://www.si.com/nfl/2023/09/21/travis-kelce-taylor-swift-dating-latest-news",
          "urlToImage": "https://www.si.com/.image/ar_1.91%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_1200/MjAwOTU2MTkwNzk5MTc3MDkw/kelce-yeah.jpg",
          "publishedAt": "2023-09-21T14:24:08Z",
          "content": "Not a day goes by at this point that football fans and Swifties alike aren’t looking for updates on the reportedly bourgeoning relationship between Chiefs tight end Travis Kelce and pop star Taylor S… [+1420 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "CNBC"
          },
          "author": "Drew Richardson, Alex Sherman",
          "title": "WWE's SmackDown to return to NBCUniversal's USA Network in more than $1.4 billion deal - CNBC",
          "description": "WWE's Friday Night SmackDown to return to NBCUniversal's USA Network as part of a five-year deal with the networks.",
          "url": "https://www.cnbc.com/2023/09/21/wwes-smackdown-to-return-to-nbcuniversals-usa-network.html",
          "urlToImage": "https://image.cnbcfm.com/api/v1/image/107304477-1695304383656-gettyimages-1487889006-img_0704.jpeg?v=1695306159 &w =1920 &h =1080",
          "publishedAt": "2023-09-21T14:22:39Z",
          "content": "WWE's \"Friday Night SmackDown\" will return to USA Network in October 2024 as part of a five-year domestic media rights partnership between TKO Group Holdings and NBCUniversal, the company said Thursd… [+1052 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Yahoo Entertainment"
          },
          "author": "Karen Friar",
          "title": "Stocks open lower as Wall Street braces for 'higher for longer': Stock market news today - Yahoo Finance",
          "description": "US stocks were poised to continue their retreat on Thursday as investors worried over the Fed's hawkish stance.",
          "url": "https://finance.yahoo.com/news/stocks-extend-slide-as-wall-street-braces-for-higher-for-longer-interest-rates-stock-market-news-today-163432102.html",
          "urlToImage": "https://s.yimg.com/ny/api/res/1.2/DOqdNbJ5RVfv0h3xJ3XQwA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-09/1bf86970-5865-11ee-bff3-303398e9aa18",
          "publishedAt": "2023-09-21T14:21:45Z",
          "content": "Tech stocks led a broad equity retreat Thursday, as Wall Street fretted about the hawkish message sent out by the Federal Reserve alongside its decision to hold interest rates steady.\r\nThe S &amp;P 50… [+7403 chars]"
        },
        {
          "source": {
            "id": "reuters",
            "name": "Reuters"
          },
          "author": "Ted Hesson",
          "title": "US offers work permits to half million Venezuelans already in country - Reuters",
          "description": "The U.S. will grant temporary deportation relief and access to work permits to nearly half a million Venezuelans already in the country, U.S. officials said on Wednesday, a move that follows calls by Democrats to help newly arrived migrants work legally.",
          "url": "https://www.reuters.com/world/us-offers-work-permits-half-million-venezuelans-already-country-2023-09-21/",
          "urlToImage": "https://www.reuters.com/resizer/ImGQfY5XbXXCSaKUe3xxG-7ccvs=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/LYDS6C6BT5OYHLB7XFJ3OVGYK4.jpg",
          "publishedAt": "2023-09-21T14:20:00Z",
          "content": "WASHINGTON, Sept 20 (Reuters) - The U.S. will grant temporary deportation relief and access to work permits to nearly half a million Venezuelans already in the country, U.S. officials said on Wednesd… [+2751 chars]"
        },
        {
          "source": {
            "id": "cnn",
            "name": "CNN"
          },
          "author": "Mitchell McCluskey, Mariya Knight, Jessie Yeung",
          "title": "Poland will stop providing weapons to Ukraine as dispute over grain imports deepens - CNN",
          "description": "Poland said Wednesday it will stop providing weapons to Ukraine amid a growing dispute between the two countries over a temporary ban on Ukrainian grain imports.",
          "url": "https://www.cnn.com/2023/09/20/europe/poland-ukraine-weapons-grain-intl-hnk/index.html",
          "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230920232238-01-ukr-poland-tanks-021323-file.jpg?c=16x9 &q =w_800,c_fill",
          "publishedAt": "2023-09-21T14:11:00Z",
          "content": "Poland said Wednesday it will stop providing weapons to Ukraine amid a growing dispute between the two countries over a temporary ban on Ukrainian grain imports.\r\nWe no longer transfer weapons to Ukr… [+4397 chars]"
        },
        {
          "source": {
            "id": "the-wall-street-journal",
            "name": "The Wall Street Journal"
          },
          "author": "Alicia A. Caldwell, Michelle Hackman",
          "title": "Migrants Overwhelm Texas City of Eagle Pass - The Wall Street Journal",
          "description": "Local officials declare emergency, ask for state and federal help as crossings rise from Mexico",
          "url": "https://www.wsj.com/politics/policy/migrants-overwhelm-texas-city-of-eagle-pass-531879cf",
          "urlToImage": "https://images.wsj.net/im-855742/social",
          "publishedAt": "2023-09-21T13:58:00Z",
          "content": null
        },
        {
          "source": {
            "id": null,
            "name": "CBS Sports"
          },
          "author": null,
          "title": "Fantasy Football Rankings for Week 3, 2023: Model says start Raheem Mostert, sit Terry McLaurin - CBS Sports",
          "description": "SportsLine's computer model reveals its Week 3 Fantasy football projections, rankings, start-sit advice",
          "url": "https://www.cbssports.com/fantasy/football/news/fantasy-football-rankings-for-week-3-2023-model-says-start-raheem-mostert-sit-terry-mclaurin/",
          "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/09/07/4a220265-81f1-4963-95d6-4d238d4c4c1c/thumbnail/1200x675/5dbe2123ddde0198d0cde9601078e397/raheem-mostert-1400-us.jpg",
          "publishedAt": "2023-09-21T13:36:58Z",
          "content": "Knowing the advantageous Fantasy football matchups is key, and you can expect to see several members of the Minnesota Vikings high in the Week 3 Fantasy football rankings. That's because the Vikings … [+3741 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "YouTube"
          },
          "author": null,
          "title": "Greeny GOES OFF on the Bears 🔥 RUINING Justin Fields! COMPLETE ORGANIZATIONAL INCOMPETENCE! | Get Up - ESPN",
          "description": "Greeny GOES OFF on the Bears 🔥 RUINING Justin Fields! COMPLETE ORGANIZATIONAL INCOMPETENCE! | Get UpMike Greenberg goes off on the Chicago Bears, saying the...",
          "url": "https://www.youtube.com/watch?v=tkCmOk3Axuw",
          "urlToImage": "https://i.ytimg.com/vi/tkCmOk3Axuw/maxresdefault.jpg",
          "publishedAt": "2023-09-21T13:14:32Z",
          "content": null
        },
        {
          "source": {
            "id": "cbs-news",
            "name": "CBS News"
          },
          "author": "Imtiaz Tyab, Omar Abdulkader",
          "title": "As Russia hits Ukraine's energy facilities with a deadly missile attack, fear mounts over nuclear plants - CBS News",
          "description": "Ukraine relied for decades on Russia to fuel its vital nuclear power plants, but now there's fear Moscow could use the facilities as a weapon of war.",
          "url": "https://www.cbsnews.com/news/russia-ukraine-war-zelenskyy-says-putin-weaponizing-energy-nuclear-plants/",
          "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2023/09/21/55cab06b-0dd5-4525-90bc-5b1c021ba685/thumbnail/1200x630/a86a71d23996ab5e55f0a6a7ae4137a7/ukraine-nuclear-rivne-1659393623.jpg?v=8e14bdb7e67d007af3399b47230d2245",
          "publishedAt": "2023-09-21T13:07:07Z",
          "content": "A \"massive\" Russian missile attack on at least six cities across Ukraine killed at least two people and left more than 20 others wounded Thursday night, Ukrainian officials said. Ukrenergo, the count… [+4158 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "CNBC"
          },
          "author": "Lillian Rizzo",
          "title": "Rupert Murdoch steps down as chairman of Fox and News Corp - CNBC",
          "description": "Murdoch's departure comes as his media empire, which includes The Wall Street Journal and Fox News, gears up for the 2024 election.",
          "url": "https://www.cnbc.com/2023/09/21/rupert-murdoch-steps-down-as-chairman-of-fox-and-news-corp.html",
          "urlToImage": "https://image.cnbcfm.com/api/v1/image/105121068-GettyImages-114571821r.jpg?v=1695302896 &w =1920 &h =1080",
          "publishedAt": "2023-09-21T13:04:10Z",
          "content": "Rupert Murdoch is stepping down as chairman of the board of both Fox Corp. and News Corp., the companies said Thursday. The move will be official in November.\r\nMurdoch, 92, will be appointed chairman… [+5901 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Forbes"
          },
          "author": "Derek Saul",
          "title": "Cisco Buys AI Firm Splunk In $28 Billion Cash Deal - Forbes",
          "description": "The acquisition positions Cisco to build the “next generation of AI-enabled security and observability,” according to its CEO.",
          "url": "https://www.forbes.com/sites/dereksaul/2023/09/21/cisco-buys-ai-firm-splunk-in-28-billion-cash-deal/",
          "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/650c3ede9f9a0fd5ef87861c/0x0.jpg?format=jpg &crop =2426,1363,x0,y0,safe &width =1200",
          "publishedAt": "2023-09-21T13:03:51Z",
          "content": "Silicon Valley giant Cisco announced Thursday it agreed to buy analytics and artificial intelligence-powered cybersecurity firm Splunk for $28 billion, marking one of the largest acquisitions of 2023… [+1442 chars]"
        }
      ];
    constructor(){
        
        super();
        this.state = {
            articles : this.articles
        }
      }


    render() {
        return (
            <div className='container my-3'>
                <h2>Fast and furious headlines</h2>
                <div className="row">
                {this.state.articles.map(items => (
                    
                    <div className="col-md-3" key ={items.url}>
                        <NewsItem newsUrl={items.url}  title={items.title} description={items.content} src={items.urlToImage}/>
                    </div>

               
                ))}
                 </div>
            </div>
        )
    }
}
