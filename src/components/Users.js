
function Users(props) {

    return (
      <>
      <h1>Users</h1>
       <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full text-left text-sm font-light">
                    <thead className="border-b font-medium dark:border-neutral-500">
                      <tr>
                      
                        <th scope="col" className="px-6 py-4">Id</th>
                        <th scope="col" className="px-6 py-4">Name</th>
                        <th scope="col" className="px-6 py-4">Username</th>
                        <th scope="col" className="px-6 py-4">Email</th>
                      </tr>
                    </thead>
                    <tbody>
                    {!props.users ? null : props.users.map((items) => {
                      console.log(items);

                      return (
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-4">{items.id}</td>
                        <td className="whitespace-nowrap px-6 py-4">{items.name}</td>
                        <td className="whitespace-nowrap px-6 py-4">{items.username}</td>
                        <td className="whitespace-nowrap px-6 py-4">{items.email}</td>
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
  
  export default Users