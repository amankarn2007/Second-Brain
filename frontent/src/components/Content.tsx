import type { Dispatch, SetStateAction } from "react";
import Card from "./Card"

interface ContentInterface{
  content: any,
  refresh: () => void,
  setSignleShare: Dispatch<SetStateAction<boolean>>;
  setContentId: Dispatch<SetStateAction<string>>;
}

function Content({content, refresh, setSignleShare, setContentId}: ContentInterface) {
  
  //console.log(content);

  return(
    <div className="pt-2 px-12 flex flex-wrap">

      
      {/*<Card 
        projectName="Notes Testing" 
        heading="heading testing"
        description="this is a description testing. dont try to craash our app, we'll file an case to you. this web application is for taking notes, links, posts etc."  
        tags="#productivity" 
        type="notes"
        refresh={() => ""}
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
              key={data._id} //every map child should have unique id
              id={data._id} //sending id, to delete and share
              projectName={data.title}
              tags={data.tags} 
              type={data.type}
              heading={data.heading}
              description={data.description}
              link={data.link}
              refresh={refresh}
              setSignleShare={setSignleShare}
              setContentId={setContentId}
            />
          ))
        ) : <p className="mt-10 text-lg">No content avilable or maybe you're not loggined</p>
      }

    </div>
  )
}

export default Content;