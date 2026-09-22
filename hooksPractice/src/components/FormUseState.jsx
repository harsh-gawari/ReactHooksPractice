import React, { useState } from 'react'

function FormUseState() {
    const [value, setValue] = useState("");
    return (
        <>
            <div className='form-box'>
                <form>
                    <label>Enter the Name : </label>
                    <input type='text' onChange={(e) => { setValue(e.target.value) }}></input>
                    <button>submit</button>
                </form>
            </div>
            <div>
                Lorem ipsum dolor, <strong>{value}</strong>. Aliquid, veniam suscipit! Quos magnam hic repudiandae, culpa eaque inventore explicabo, ea fuga modi deserunt expedita odit ducimus corrupti iste ad cum!
                Corporis quaerat obcaecati eveniet aperiam ratione quo repudiandae ducimus molestias. At tempore porro quasi, ducimus natus eum! Sed, obcaecati inventore laborum fugit, possimus assumenda totam ab nobis eos praesentium aut?
                Beatae nulla incidunt possimus qui! Laudantium, quasi est optio nam officiis labore quis, repellat nulla, vero natus earum. Veniam culpa quam quos quaerat impedit iusto cupiditate suscipit animi labore modi.
                Quo facilis dolorem sunt doloremque fuga odio, nulla aliquam perspiciatis. Suscipit eaque fugit a dolore iure. Mollitia, sunt nesciunt voluptatem ipsam corporis repellat maiores, nemo autem rem reiciendis voluptatibus consectetur.
                Omnis asperiores in dolore itaque aut aspernatur velit fuga? Dolores totam iste vitae corrupti, provident minima, eum, quia non labore atque doloribus! Perspiciatis illum id sequi porro eveniet! Molestiae, quia?
                Totam aperiam saepe nam nesciunt iusto quaerat. Voluptas quasi tempore, a numquam, quae illum quia sint incidunt magni in ut cupiditate non! Ullam, consectetur voluptatibus iste ipsa quia id magnam?
                Quis doloribus asperiores libero architecto ducimus obcaecati facilis est! Quae dolorum, asperiores sequi est laborum voluptatum quaerat suscipit iusto repudiandae ratione voluptates expedita totam atque vel temporibus et autem reiciendis.
                Sapiente sit, voluptatem excepturi recusandae numquam atque sunt amet modi odio, debitis fuga, eligendi quae dolorum. Exercitationem molestias, natus dolorum officia aperiam vitae quia expedita assumenda distinctio, modi porro totam.
                Soluta eligendi sunt voluptate in facilis. Debitis, praesentium. Illo maxime similique eum ipsa ratione, quod tempore voluptate aut? Corporis libero enim repudiandae illo impedit modi optio alias id aperiam incidunt?
                Optio odio quos reprehenderit reiciendis consequuntur facere vero, cum dolores nostrum modi, suscipit perspiciatis inventore. Vero ipsa nulla laboriosam dolores quisquam impedit, obcaecati error minima fugiat doloribus et, suscipit odit!
            </div>

        </>
    )
}

export default FormUseState