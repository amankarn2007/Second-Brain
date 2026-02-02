import type { Dispatch, SetStateAction } from "react";
import Card from "./Card"
import ShowLink from "./ShowLink";

interface ContentInterface{
  content: any,
  refresh: () => void,
  setSignleShare: Dispatch<SetStateAction<boolean>>;
  setContentId: Dispatch<SetStateAction<string>>;
  filterTweet?: boolean;
  filterVideos: boolean;
  filterNotes: boolean;
  filterLinks: boolean;
}

function Content(props: ContentInterface) {
  //console.log(content);

  return(
    <div className="pt-2 px-12 flex flex-wrap">

      { props.filterTweet ? (
          props.content && props.content.length > 0 && (
            props.content
              .filter((data: any) => data.type === "x")
              .map((data: any) => (
                <Card
                  key={data._id}
                  id={data._id}
                  projectName={data.title}
                  tags={data.tags} 
                  type={data.type}
                  heading={data.heading}
                  description={data.description}
                  link={data.link}
                  refresh={props.refresh}
                  setSignleShare={props.setSignleShare}
                  setContentId={props.setContentId}
                />
              ))
          )
        ) : props.filterVideos ? (
              props.content && props.content.length > 0 && (
                props.content
                  .filter((data: any) => data.type === "youtube")
                  .map((data: any) => (
                    <Card
                      key={data._id}
                      id={data._id}
                      projectName={data.title}
                      tags={data.tags} 
                      type={data.type}
                      heading={data.heading}
                      description={data.description}
                      link={data.link}
                      refresh={props.refresh}
                      setSignleShare={props.setSignleShare}
                      setContentId={props.setContentId}
                    />
                  ))
              )
        ) : props.filterNotes ? (
              props.content && props.content.length > 0 && (
                props.content
                  .filter((data: any) => data.type === "notes")
                  .map((data: any) => (
                    <Card
                      key={data._id}
                      id={data._id}
                      projectName={data.title}
                      tags={data.tags} 
                      type={data.type}
                      heading={data.heading}
                      description={data.description}
                      link={data.link}
                      refresh={props.refresh}
                      setSignleShare={props.setSignleShare}
                      setContentId={props.setContentId}
                    />
                  ))
              )

        ): props.filterLinks ? (
          <ShowLink />

        ) : props.content && props.content.length > 0 ? (
            props.content.map((data: any) => (
              <Card
                key={data._id} //every map child should have unique id
                id={data._id} //sending id, to delete and share
                projectName={data.title}
                tags={data.tags} 
                type={data.type}
                heading={data.heading}
                description={data.description}
                link={data.link}
                refresh={props.refresh}
                setSignleShare={props.setSignleShare}
                setContentId={props.setContentId}
              />
            ))
        ) : <p className="mt-10 text-lg">No content avilable or maybe you're not loggined</p>
      }

    </div>
  )
}

export default Content;


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
