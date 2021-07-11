import Blogcard from "./components/blog-card";
import './scss/Blogs.scss'

function Blogs() {
	return (
		<div>
			<div id="blog-header">
				<h1 style={{color: 'black'}}>
					Yep, this is the blog!
				</h1>
			</div>
			<div id='blog-container'>
				<Blogcard title='hello' link='fuck' desc='testing'/>
				<Blogcard title='test2' link='fuck'/>
				<Blogcard title='test3' link='fuck'/>
			</div>
		</div>
	)
}


export default Blogs;