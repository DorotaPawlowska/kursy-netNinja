const container = document.querySelector('.container');

//store last doc
let latestDoc = null;

const getNextReviews = async () => {
  const ref = db.collection('reviews')
    .orderBy('createdAt')
    .startAfter(latestDoc || 0)
    .limit(2);

  const data = await ref.get();

  // output docs
  let template = '';
  data.docs.forEach(doc => {
    const review = doc.data();
    template += `
      <div class="card">
        <h2>${review.title}</h2>
        <p>written by ${review.author}</p>
        <p>rating - ${review.rating} / 5</p>
      </div>
    `
  });
  container.innerHTML += template;
  // updete latest doc
  latestDoc = data.docs[data.docs.length - 1];

  // unattach event listners if no more docs
  if(data.empty){
    loadMore.removeEventListener('click', handleClick);
  }
};

// wait for DOM content to load
window.addEventListener('DOMContentLoaded', () => getNextReviews());

//load more docs (button)
const loadMore = document.querySelector('.load-more button');

const handleClick = () => {
  getNextReviews();
}

loadMore.addEventListener('click', handleClick);
