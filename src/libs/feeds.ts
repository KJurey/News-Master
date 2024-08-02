export const feeds = [
  {
    north: {
      world: {
        nytimes: "https://rss.nytimes.com/services/xml/rss/nyt/Americas.xml",
        fox: "https://moxie.foxnews.com/google-publisher/world.xml",
        washington:
          "https://feeds.washingtonpost.com/rss/world?itid=lk_inline_manual_35",
        cbs: "https://www.cbsnews.com/latest/rss/main",
      },
      business: {
        nytimes: "https://rss.nytimes.com/services/xml/rss/nyt/Business.xml",
        washington:
          "https://feeds.washingtonpost.com/rss/business?itid=lk_inline_manual_36",
        cbs: "https://www.cbsnews.com/latest/rss/moneywatch",
      },
      sports: {
        fox: "https://api.foxsports.com/v2/content/optimized-rss?partnerKey=MB0Wehpmuj2lUhuRhQaafhBjAJqaPU244mlTDK1i&size=30",
        cbs: "https://www.cbssports.com/rss/headlines/",
        nytimes: "https://rss.nytimes.com/services/xml/rss/nyt/Sports.xml",
        washington:
          "https://feeds.washingtonpost.com/rss/sports?itid=lk_inline_manual_19",
      },
      science: {
        nytimes: "https://rss.nytimes.com/services/xml/rss/nyt/Technology.xml",
        cnn: "http://rss.cnn.com/rss/money_technology.rss",
        fox: "https://moxie.foxnews.com/google-publisher/science.xml",
        cbs: "https://www.cbsnews.com/latest/rss/science",
      },

      finance: {
        nytimes: "https://rss.nytimes.com/services/xml/rss/nyt/Economy.xml",
        cnbc: "https://search.cnbc.com/rs/search/combinedcms/view.xml?partnerId=wrss01&id=10000664",
        marketWatch:
          "https://feeds.content.dowjones.io/public/rss/mw_topstories",
        npr: "https://feeds.npr.org/1017/rss.xml",
      },
    },
    latin: {
      world: {
        bbc: "https://feeds.bbci.co.uk/news/world/latin_america/rss.xml",
        reports: "https://latinamericareports.com/feed/",
        newsAmericas: "https://www.newsamericasnow.com/feed/",
        merco: "https://en.mercopress.com/rss/latin-america",
      },
      business: {
        newsAmericas:
          "https://www.newsamericasnow.com/category/caribbean-business-news/feed/",
        latinAmerican:
          "https://latinamericanpost.com/category/business-and-finance/feed/",
        latinTrade: "https://feeds2.feedburner.com/latintrade",
      },
      sports: {
        newsAmericas:
          "https://www.newsamericasnow.com/category/caribbean-sports/feed/",
        latinAmerican: "https://latinamericanpost.com/category/sports/feed/",
      },
      science: {
        mit: "https://news.mit.edu/topic/mitlatin-america-rss.xml",
      },
      finance: {
        latinAmerican:
          "https://latinamericanpost.com/category/economy-en/feed/",
        merco: "https://en.mercopress.com/rss/investments",
        merco2: "https://en.mercopress.com/rss/economy",
      },
    },
    europe: {
      world: {
        rferl: "https://www.rferl.org/api/zbqimetkiy",
        euractiv: "https://www.euractiv.com/?feed=mcfeed",
        france24: "https://www.france24.com/en/europe/rss",
      },
      business: {
        bbc: "https://feeds.bbci.co.uk/news/business/rss.xml",
        france24: "https://www.france24.com/en/business-tech/rss",
      },
      sports: {
        mirror: "https://www.mirror.co.uk/sport/?service=rss",
        guardian: "https://www.theguardian.com/uk/sport/rss",
      },
      science: {
        euractiv:
          "https://pr.euractiv.com/pr/rss/infosociety/?_ga=2.47953447.1213349011.1720134699-1796942215.1720134699",
        bbc: "https://feeds.bbci.co.uk/news/technology/rss.xml",
        bbc2: "https://feeds.bbci.co.uk/news/science_and_environment/rss.xml",
        eurostat:
          "https://ec.europa.eu/eurostat/en/search?p_p_id=estatsearchportlet_WAR_estatsearchportlet&p_p_lifecycle=2&p_p_state=maximized&p_p_mode=view&p_p_resource_id=atom&_estatsearchportlet_WAR_estatsearchportlet_theme=PER_RESDEV&_estatsearchportlet_WAR_estatsearchportlet_collection=CAT_PREREL",
      },
      finance: {
        euractiv:
          "https://pr.euractiv.com/pr/rss/euro-finance/?_ga=2.97124319.1733275055.1720134633-571238670.1720134633",
        eurostat:
          "https://ec.europa.eu/eurostat/en/search?p_p_id=estatsearchportlet_WAR_estatsearchportlet&p_p_lifecycle=2&p_p_state=maximized&p_p_mode=view&p_p_resource_id=atom&_estatsearchportlet_WAR_estatsearchportlet_theme=PER_ECOFIN&_estatsearchportlet_WAR_estatsearchportlet_collection=CAT_PREREL",
      },
    },
    asia: {
      world: {
        southChina: "https://www.scmp.com/rss/3/feed",
        cna: "https://www.channelnewsasia.com/api/v1/rss-outbound-feed?_format=xml&category=6311",
        diplomat: "https://thediplomat.com/feed/",
      },
      sports: {
        southChina: "https://www.scmp.com/rss/95/feed",
        cna: "https://www.channelnewsasia.com/api/v1/rss-outbound-feed?_format=xml&category=10296",
      },
      business: {
        southChina: "https://www.scmp.com/rss/92/feed",
        cna: "https://www.channelnewsasia.com/api/v1/rss-outbound-feed?_format=xml&category=6936",
      },
      science: {
        scientist: "https://www.asianscientist.com/feed/?x=1",
        splash: "https://splash247.com/category/region/asia/sector/tech/feed/",
      },
      finance: {
        financeAsia: "https://www.financeasia.com/rss/latest",
        splash:
          "https://splash247.com/category/region/asia/sector/finance-and-insurance/feed/",
        diplomat: "https://thediplomat.com/topics/economy/feed",
      },
    },
  },
];
