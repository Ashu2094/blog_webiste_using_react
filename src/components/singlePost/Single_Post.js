import "./singlePost.css"

function Single_Post() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg" src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
       <h1 className="singlePostTitle">
        Lorem ipsum dolor sit amicing elit
        <div className="singlePostEdit">
          <i className="singlePostIcon far fa-edit"></i>
          <i className="singlePostIcon  far fa-trash-alt"></i>
        </div>
      </h1>


      <div className="singlePostInfo">
        <span className="singlePostAuthor">Author:<b>Ashu</b></span>
        <span className="singlePostDAte">1 hour ago</span>
      </div>
      <p className="singlePostDesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit aspernatur magnam vel possimus officiis ipsam numquam amet. Dignissimos laudantium tempora nihil, placeat molestiae id ullam similique mollitia assumenda voluptates vero ab natus tempore quasi neque excepturi ad aspernatur? Voluptas non sed cumque, obcaecati alias magnam dolorum deserunt! Voluptates cum perspiciatis quaerat, esse aliquid odit ipsum nihil aperiam. Blanditiis iure, dignissimos aspernatur, porro veniam inventore cupiditate qui consectetur fuga dicta ab aut sit iusto doloribus sequi commodi ipsam possimus suscipit, debitis quis odit. Facere ea magni repudiandae dicta, eos quas vitae adipisci alias corporis. Corporis ipsam sunt nemo natus ab officiis, sed at tempora. Eveniet est eos explicabo hic ullam quidem. Illo harum vitae sint nam in illum cumque voluptatum quos, assumenda animi asperiores quae similique ex necessitatibus recusandae nemo facilis dolorum quas suscipit! Porro quae atque illum voluptate fugiat, inventore quis excepturi cum, cumque, officiis dicta. Magni rem aliquam maxime.</p>
      </div>
    </div>
  )
}

export default Single_Post
