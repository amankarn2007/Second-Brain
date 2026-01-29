import Card from "./Card"

function Content() {
  return(
    <div className="pt-2 px-12 flex">

      <Card 
        projectName="Notes Testing" 
        heading="heading testing"
        description="this is a description testing. dont try to craash our app, we'll file an case to you. this web application is for taking notes, links, posts etc."  
        tags="#productivity" 
        type="notes"
      />

      <Card 
        projectName="Youtube Testing"
        tags="#productivity" 
        type="youtube"
        link="https://youtu.be/xTtL8E4LzTQ?si=fpWyrGrEQ1rqnoJU"
      />

      <Card 
        projectName="X Post Testing"
        tags="#100xDevs" 
        type="x"
        link="https://x.com/kirat_tw/status/2015858697055174841"
      />

    </div>
  )
}

export default Content;