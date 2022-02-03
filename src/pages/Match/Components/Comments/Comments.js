import React from "react";
import {
  CommentsContainer,
  Comment,
  Alert,
  CommentCard,
  Time,
  Player,
} from "./Comments.styled";
import useMatches from "../../../../Hooks/UseMatches";
import { Head } from "../Details/Details.styled";

const Comments = () => {
  const { comments, activeMatch } = useMatches();
  console.log(comments);
  const result = [];
  let ReverseLiveComments = [];
  if (comments) {
    for (let i in comments) {
      result.push([i, comments[i]]);
    }

    const AllLiveComments = result[0][1].live_comments;
    ReverseLiveComments = [].concat(AllLiveComments).reverse();

    const LiveComments = [];
    for (let i in AllLiveComments) {
      if (AllLiveComments[i].text.includes("possesion"))
        LiveComments.push([i, comments[i]]);
    }
  }

  return (
    <CommentsContainer>
      {ReverseLiveComments && (
        <>
          <Head>Live Comments</Head>
          {activeMatch.match_status !== "" ? (
            <>
              {ReverseLiveComments.map((comment) => {
                return (
                  <>
                    <CommentCard>
                      <Time>{comment.time}</Time>
                      <Comment>
                        {comment.text}{" "}
                        {comment.state ? (
                          <Player>({comment.state})</Player>
                        ) : (
                          ""
                        )}
                      </Comment>
                    </CommentCard>
                  </>
                );
              })}
            </>
          ) : (
            <Alert>This match has finished</Alert>
          )}
        </>
      )}
    </CommentsContainer>
  );
};

export default Comments;
