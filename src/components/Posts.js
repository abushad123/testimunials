
function Posts(props) {
console.log(props.posts)
    return (
      <>
      <h1>Posts</h1>
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full text-left text-sm font-light">
                    <thead className="border-b font-medium dark:border-neutral-500">
                      <tr>
                      
                        <th scope="col" className="px-6 py-4">Id</th>
                        <th scope="col" className="px-6 py-4">Title</th>
                        <th scope="col" className="px-6 py-4">Body</th>
                      </tr>
                    </thead>
                    <tbody>
                    {!props.posts ? null : props.posts.map((items) => {
                      console.log(items);

                      return (
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-4">{items.id}</td>
                        <td className="whitespace-nowrap px-6 py-4">{items.title}</td>
                        <td className="whitespace-nowrap px-6 py-4">{items.body}</td>
                      </tr>
                            );
                          })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
      </>
    )
  }
  
  export default Posts