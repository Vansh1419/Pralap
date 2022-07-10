import "./blog.component.css";
const BlogItem = (props) => {
  return (
    <div className="home__blog">
      <div className="my__blog">
        <h2 className="blog__heading">{props.blogInfo.heading}</h2>
        <img
          src={`https://robohash.org/${props.blogInfo.id}?set=set2`}
          alt="photos"
          className="blog__image"
        />
        <p className="blog__content">{props.blogInfo.content}</p>
        <cite className="blog__author">
          <>-{props.blogInfo.author}</>
        </cite>
      </div>
    </div>
  );
};
export default BlogItem;
