import Blogcard from "./components/blog-card";
import './scss/Blogs.scss'
import placeholder from "./assets/placeholder.jpeg"
import placeholder2 from "./assets/placeholder2.jpg"
import placeholder3 from "./assets/placeholder3.jpg"
import banana from "./assets/banana.png"

function Blogs() {
	return (
		<div>
			<div id="blog-header">
				<h1 style={{color: 'black'}}>
					Yep, testing title for page!
				</h1>
			</div>
			<div id='blog-container'>
				<Blogcard title='Testing Title 1' link='fuck1' desc='testing' 
				 bgImage={placeholder} overImage={banana}/>
				<Blogcard title='Testing Title 2' link='fuck1' desc='testing' 
				 bgImage={placeholder2} overImage={banana}/>
				<Blogcard title='Testing Title 3' link='fuck1' desc='testing' 
				 bgImage={placeholder3} overImage={banana}/>
			</div>
		</div>
	)
}


export default Blogs;