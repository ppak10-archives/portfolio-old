// ----------------------------------------------------------------------------
// Original Creator: Redux
// File Developer: Peter Pak
// Description: Component for Redux posts
// ----------------------------------------------------------------------------

// Package Imports ------------------------------------------------------------
import React, { Component } from 'react';
import PropTypes from 'prop-types'
// ----------------------------------------------------------------------------

// Posts Component ------------------------------------------------------------
class Posts extends Component {
  render() {
    return (
      <ul className = "list-group">
        { this.props.posts.map((post, i) =>
          <li className = "list-group-item" key = { i }>
            <div className = "card">
              <div className = "card-body">

                <a target = "_blank" rel="noopener noreferrer" href = {
                   post.url
                }>
                  <h4 className = "card-title">{ post.title }</h4>
                </a>

                <span>
                  <a target = "_blank" rel="noopener noreferrer" href = {
                    "http://reddit.com"+post.permalink
                  }>
                    <h5 className = "card-subtitle">
                      Comments: ({ post.num_comments })
                    </h5>
                  </a>
                  <h6>Score: ({ post.score })</h6>
                  <p>Author: { post.author }</p>
                </span>
              </div>
            </div>
          </li>
        )}
      </ul>
    )
  }
}
// ----------------------------------------------------------------------------

// PropTypes ------------------------------------------------------------------
Posts.propTypes = {
  posts: PropTypes.array.isRequired
}
// ----------------------------------------------------------------------------

// Component Export -----------------------------------------------------------
export default Posts
// ----------------------------------------------------------------------------
