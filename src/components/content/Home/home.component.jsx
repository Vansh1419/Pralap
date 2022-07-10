import BlogItem from "../../blog/blog.component";
import './home.component.css'
const HomeComponent = (props) => {
    const blogs =props.property
  return (
    <div className="content__home">
      {blogs.map(
        (blog)=>{
            return (
              <BlogItem blogInfo= {blog}/>
        )
             
        }
      )}
    </div>
  );
};
export default HomeComponent;
