const container = document.querySelector('.container');
const loading = document.querySelector('.loading');

//store last doc
let latestDoc = null;

const getNextReviews = async (doc) => {
  loading.classList.add('active');

  const ref = db.collection('reviews')
    .orderBy('createdAt')
    .startAfter(doc || 0)
    .limit(4);

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
  loading.classList.remove('active');

  // updete latest doc
  latestDoc = data.docs[data.docs.length - 1];

  // unattach event listners if no more docs
  if(data.empty){
    loadMore.removeEventListener('click', handleClick);
    container.removeEventListener('scroll', handleScroll);
  }
};

// wait for DOM content to load
window.addEventListener('DOMContentLoaded', () => getNextReviews());

//load more docs (button)
const loadMore = document.querySelector('.load-more button');
const handleClick = () => {
  getNextReviews(latestDoc);
}
loadMore.addEventListener('click', handleClick);

//load more docs (scroll)
const handleScroll = () => {
  let triggerHeight = container.scrollTop + container.offsetHeight;
  if(triggerHeight >= container.scrollHeight){
    getNextReviews(latestDoc);
      // console.log('scroll');

  }
}
container.addEventListener('scroll', handleScroll);
