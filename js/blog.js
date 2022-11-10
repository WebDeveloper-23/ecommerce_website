async function getPostsData () {
     try {
          let postsLink = 'https://dummyjson.com/posts'
          let postsData = await fetch(postsLink,{
               method:'GET'
          })
          .then(res => res.json())

         postsData.posts.forEach( element => {

               let blogCard = document.createElement('div')
               blogCard.classList.add('blog-card')
               
               let blogCardTitle = document.createElement('div')
               blogCardTitle.classList.add('blog-card-title')

               let blogCardTitleText = document.createElement('h2')
               blogCardTitleText.classList.add('blog-card-title-text')
               blogCardTitleText.innerText = `${element.title}`

               blogCard.appendChild(blogCardTitle)
               blogCardTitle.appendChild(blogCardTitleText)



               let tags = document.createElement('div')
               tags.classList.add('tags')

               
               for (const iterator of element.tags) {
                    let tagsSpan = document.createElement('span')
                    tagsSpan.innerText = `${iterator}`
                    tags.appendChild(tagsSpan)

                    console.log(iterator);
               }
               blogCard.appendChild(tags)

               let blogCardBody = document.createElement('div')
               blogCardBody.classList.add('blog-card-body')

               let blogCadBodyText = document.createElement('p')
               blogCadBodyText.classList.add('blog-card-body-text')
               blogCadBodyText.innerText = `${element.body}`

               blogCard.appendChild(blogCardBody)
               blogCardBody.appendChild(blogCadBodyText)


               document.querySelector('.blog').appendChild(blogCard)
         })
          
     } catch (error) {
          console.log(error)
     }
     
}

getPostsData()


