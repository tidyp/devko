import React from "react";
import './style.css'

const Board = (props) => {
  return (
    <>
      <div className="frame">
        <div className="div">
          <div className="div-2">
            <div className="div-3">
              <div className="div-4">
                <img
                  className="rectangle"
                  alt="Rectangle"
                  src="rectangle-10.png"
                />
                <div className="div-5">
                  <div className="text-wrapper">Behance Connection</div>
                  <div className="div-6">
                    <div className="img-wrapper">
                      <img
                        className="img"
                        alt="Img"
                        src={props.el.imgurl}
                      />
                    </div>
                    <div className="div-7">
                      <div className="text-wrapper-2">{props.el.name}</div>
                      <img className="line" alt="Line" src="line-15.svg" />
                      <div className="text-wrapper-3">1 day ago</div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="p">
                <span className="span">
                  Hi, there! This is an app that allows users to search for
                  recipes while keeping their health in check. The design of
                  this app makes it easy for everyone to find different recipes
                  of their choice along wit{" "}
                </span>
                <span className="text-wrapper-4">...view more</span>
              </p>
            </div>
            <div className="div-8">
              <img className="thumbnail" alt="Thumbnail" src={props.el.imgurl} />
              <div className="div-9">
                <div className="text-wrapper-5">182 likes</div>
                <div className="text-wrapper-5">·</div>
                <div className="text-wrapper-5">21 comments</div>
              </div>
              <div className="div-10">
                <div className="div-11">
                  <div className="div-7">
                    <img className="img-2" alt="Favorite" src="favorite.png" />
                    <div className="text-wrapper-6">Like</div>
                  </div>
                  <div className="div-7">
                    <img className="img-2" alt="Chat" src="chat.png" />
                    <div className="text-wrapper-6">Comment</div>
                  </div>
                  <div className="div-7">
                    <img className="img-2" alt="Bookmark" src="bookmark.png" />
                    <div className="text-wrapper-6">Save</div>
                  </div>
                </div>
                <div className="div-7">
                  <img className="img-2" alt="Share" src="share.png" />
                  <div className="text-wrapper-6">Share</div>
                </div>
              </div>
            </div>
          </div>
          <div className="div-2">
            <div className="div-3">
              <div className="div-4">
                <img
                  className="rectangle"
                  alt="Rectangle"
                  src={props.el.imgurl}
                />
                <div className="div-5">
                  <div className="text-wrapper">Design Hive</div>
                  <div className="div-6">
                    <div className="img-wrapper">
                      <img className="img" alt="Img" src="image.png" />
                    </div>
                    <div className="div-7">
                      <div className="text-wrapper-2">Alex Harper</div>
                      <img className="line" alt="Line" src="image.svg" />
                      <div className="text-wrapper-3">3 day ago</div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="p">
                <span className="span">
                  Unleash the Crypto Craze with CRYPTUME! 🚀🌙 Dive into this
                  wild ride of stunning UI designs that make buying
                  cryptocurrency a joyride. Get ready to explore the world of
                  digital assets with a pinch{" "}
                </span>
                <span className="text-wrapper-4">...view more</span>
              </p>
            </div>
            <div className="div-8">
              <img
                className="thumbnail"
                alt="Thumbnail"
                src={props.el.imgurl}
              />
              <div className="div-9">
                <div className="text-wrapper-5">632 likes</div>
                <div className="text-wrapper-5">·</div>
                <div className="text-wrapper-5">62 comments</div>
              </div>
              <div className="div-12">
                <div className="div-11">
                  <div className="div-7">
                    <img
                      className="img-2"
                      alt="Favorite"
                      src={props.el.imgurl}
                    />
                    <div className="text-wrapper-6">Liked</div>
                  </div>
                  <div className="div-7">
                    <img className="img-2" alt="Chat" src="chat-2.png" />
                    <div className="text-wrapper-6">Comment</div>
                  </div>
                  <div className="div-7">
                    <img
                      className="img-2"
                      alt="Bookmark"
                      src="bookmark-2.png"
                    />
                    <div className="text-wrapper-6">Save</div>
                  </div>
                </div>
                <div className="div-7">
                  <img className="img-2" alt="Share" src="share-2.png" />
                  <div className="text-wrapper-6">Share</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Board;
