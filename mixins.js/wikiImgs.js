export default {
  data() {
    return {
      wikiImg: "",
      imgList: [],
    }
  },

  methods: {
    async getWikiImg(name) {
      var parsed = name.replace(/ /g, "_").toLowerCase()
      var link =
        "https://en.wikipedia.org/w/api.php?action=query&titles=" +
        parsed +
        "&prop=pageimages&format=json&pithumbsize=1000&origin=*&redirects=1"
      let { data } = await this.$axios.get(link, {
        headers: {
          "Content-type": "multipart/from-data",
        },
      })
      let page = data.query.pages
      if (page) {
        console.log("PAGE:", page)
        let pageId = Object.keys(data.query.pages)[0]
        console.log(page[pageId])

        // if(!page[pageId].thumbnail.source) {
        //   return;
        // }
        let wiki_image = page[pageId].thumbnail.source
        console.log(wiki_image)
        this.wikiImg = wiki_image
      }
      return
    },
    async getMoreWiki(name) {
      var parsed = name.replace(/ /g, "_").toLowerCase()
      var wiki_url = "https://en.wikipedia.org/w/api.php"
      var params = {
        action: "query",
        format: "json",
        prop: "pageimages",
        generator: "images",
        gimlimit: 500,
        pithumbsize: 1000,
        redirects: 1,
        titles: parsed,
      }
      var link = wiki_url + "?origin=*"
      Object.keys(params).forEach(function (key) {
        link += "&" + key + "=" + params[key]
      })
      console.log("LINK:", link)
      let { data } = await this.$axios.get(link, {
        headers: {
          "Content-type": "multipart/from-data",
        },
      })
      let pages = data.query.pages
      if (pages) {
        console.log("PAGES:", pages)
        for (var page of Object.keys(pages)) {
          var url = pages[page].thumbnail.source
          if (!url.includes(".svg") && !url.includes("Icon")) {
            console.log("Hiero:", url)
            // create a usable var for each wiki link
            this.imgList.push(url)
          }
        }
        console.log(this.imgList)
      }
      return
    },
  },
}
