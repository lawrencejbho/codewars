const { MaxPriorityQueue } = require("@datastructures-js/priority-queue");



// original solution with a lot of comments


var Twitter = function () {
  this.count = 0;
  this.tweetMap = new Map();
  this.followMap = new Map();
};

Twitter.prototype.postTweet = function (userId, tweetId) {
  let tweets = this.tweetMap;
  // userId needs to get saved as a string to use has in the other functions.  This is probably why typescript is good. 
  //   console.log(tweets.has(`${userId}`));
  if (tweets.has(`${userId}`)) {
    tweets.get(`${userId}`).push([this.count, tweetId]);
  } else {
    tweets.set(`${userId}`, [[this.count, tweetId]]);
  }
  this.count++;
  //   console.log(tweets);
};

Twitter.prototype.getNewsFeed = function (userId) {
  let tweets = this.tweetMap;
  let user_follow = this.followMap;
  let mpq = new MaxPriorityQueue();
  let res = [];

  //   console.log(tweets);
  //   the user needs to follow himself in this problem
  this.follow(userId,userId)

  for (followeeId in user_follow.get(userId)) {
    console.log("first logic");
    console.log("followeeId" + followeeId);

    // check if they have one tweet
    if (tweets.has(followeeId)) {
      console.log("in tweets");
      // neetcode explanation uses an index, but we don't need this because we are using enqueue intsead of heapify
      let index = tweets.get(followeeId).length - 1;
      // grabs every tweet from the followeeId and enqueues slowly - this is probably why the runtime is not great because no heapify
      Object.entries(tweets.get(followeeId)).forEach(([userId, value]) => {
        // console.log(value);
        let [count, tweetId] = value;
        mpq.enqueue([tweetId, followeeId, index - 1], count);
      });
    }
  }

  while (mpq.size() && res.length < 10) {
    console.log("hit");
    // we don't need the followeeId or index 
    let [tweetId, followeeId, index] = mpq.dequeue().element;
    res.push(tweetId);
  }
  return res;
};

// search for the specific followerId, assign that object to ar, set true for the followeeId and then modify our original followMap
// python has the built in dictionary that can automatically add into the followMap in 1 line
Twitter.prototype.follow = function (followerId, followeeId) {
  let user_follow = this.followMap;
  let ar = {};
  if (user_follow.has(followerId)) {
    ar = user_follow.get(followerId);
  }
  ar[followeeId] = true;
  user_follow.set(followerId, ar);
};

Twitter.prototype.unfollow = function (followerId, followeeId) {
  let user_follow = this.followMap;
  let ar = {};
  if (user_follow.has(followerId)) {
    ar = user_follow.get(followerId);
  }

  // you can also use (followeeId in ar) for the conditional as it's easier to remember than hasOwnProperty
  if (ar.hasOwnProperty(followeeId)) {
    delete ar[followeeId];
  }

  user_follow.set(followerId, ar);
};


// much more condensed version

class Twitter { 
    constructor() { 
        this.count = 0 
        this.followMap = new Map()
        this.tweetMap = new Map()
    }
}


Twitter.prototype.postTweet = function (userId, tweetId) {

    let tweets = this.tweetMap;
  if (tweets.has(`${userId}`)) {
    tweets.get(`${userId}`).push([this.count, tweetId]);
    } else {
    tweets.set(`${userId}`, [[this.count, tweetId]]);
    }
    this.count++
}
Twitter.prototype.getNewsFeed = function (userId) {

    let mpq = new MaxPriorityQueue(); 
    let tweets = this.tweetMap
    let followers = this.followMap
    let res = []
    
    this.follow(userId,userId)

    for (followeeId in followers.get(userId)) { 
        if(tweets.has(followeeId)) { 
            Object.entries(tweets.get(followeeId)).forEach(([key,value]) => { 
                let [count,tweetId] = value 
                mpq.enqueue(tweetId ,count)
            })
        }
    }
            while(mpq.size() && res.length < 10) { 
            let tweetId = mpq.dequeue().element
            res.push(tweetId)
        }
    return res 
}


Twitter.prototype.follow = function (followerId, followeeId) {

    let followMap = this.followMap 
    let ar ={}
    if (followMap.has(followerId)) { 
        ar = followMap.get(followerId)
    }
    ar[followeeId] = true 
    followMap.set(followerId, ar)
}


Twitter.prototype.unfollow = function (followerId, followeeId) {
    let followMap = this.followMap 
    let ar ={}
    if (followMap.has(followerId)) { 
        ar = followMap.get(followerId)
    }
    if(followeeId in ar) {
    delete ar[followeeId]
    }
    followMap.set(followerId, ar)
}



























class Twitter { 
    constructor { 
        this.count = 0 
        this.followers = new Map()
        this.tweets = new Map()
    }
}


Twitter.prototype.postTweet = function(userId,tweetId) { 

    let tweets = this.tweetMap;
    if(tweets.has(`${userId}`)) { 
        tweets.get(`${userId}`).push([this.count, tweetId])
    } else {
    tweets.set(`${userId}`, [[this.count, tweetId]])
    }
    this.count++
}


Twitter.prototype.getNewsFeed = function (userId) {

    let mpq = new MaxPriorityQueue; 
    let tweets = this.tweetMap
    let followers = this.followMap
    let res = []
    
    this.follow(userId,userId)

    // get all the followees
    for (followeeId in followers.get(userId)) { 
        if(tweets.has(followeeId)) { 
            let index = followeeId.length -1 
            Object.entries(tweets.get(followeeId)).forEach(([key,value]) => { 
                let [count,tweetId] = value 
                mpq.enqueue(tweetId ,count)
            })
        }

        while(mpq.size() && res.length < 10) { 
            console.log("hit")
            let tweetId = mpq.dequeue().element
            console.log(tweetId)
            res.push(tweetId)
        }
    }
    return res 
}




Twitter.prototype.follow = function (followerId, followeeId) {

    let followMap = this.followMap 
    let ar ={}
    if (followMap.has(followerId)) { 
        ar = followMap.get(followerId)
    }
    ar[followeeId] = true 

    followMap.set(followerId, ar)

}


Twitter.prototype.unfollow = function (followerId, followeeId) {
    let followMap = this.followMap 
    let ar ={}
    if (followMap.has(followerId)) { 
        ar = followMap.get(followerId)
    }
    ar.remove(followeeId) 

    followMap.set(followerId, ar)

}









