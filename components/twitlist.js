import React from 'react';


class twitList extends React.Component {
    loadTweets(){
      let loadRequest = $.ajax({
        type: 'GET',
        url:'localhost:3030/api',
        crossDomain: true,
        dataType: 'json'
      });

      loadRequest.done((data) => {
        console.log(data)
        return <li>Tweet</li>
      });
    }
    
    render(){
        console.log('twitlist')
        return (
          <div>
            <h4>Tweets</h4>
            <ul>
              {this.loadTweets()}
            </ul>
          </div>
          );
    }
}

export default twitList;