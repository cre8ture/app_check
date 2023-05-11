
export async function scrapeUrl(url){
    try {
      // const response = await axios.get(`/api/scrape?url=${url}`)
      console.log('i is url in brains', url)
      const response = await fetch(`/api/scrape?url=${url}`)
      const data = await response.json();
      return data.text
    } catch (error) {
      console.error(error)
      return 'Error scraping text'
      
    }
  }