import Card from "./Card"

function Content({content}: any) {
  
  //console.log(content);

  return(
    <div className="pt-2 px-12 flex flex-wrap">

      {/*<Card 
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
      />*/}

      { content && content.length > 0 ? (
          content.map((data: any) => (
            <Card 
              key={data._id}
              projectName={data.title}
              tags={data.tags} 
              type={data.type}
              link={data.link}
            />
          ))
        ) : <p className="mt-10 text-lg">No content avilable</p>
      }

    </div>
  )
}

export default Content;