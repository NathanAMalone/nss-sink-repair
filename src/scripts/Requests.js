import { getRequests } from "./dataAccess.js"

export const Requests = () => {
    const requests = getRequests()

//     The function you write will convert each service request object into HTML representations. Since it is wrapped with a <ul> element, make each one an <li> element showing only the description of the request to start.

// The function should define 1 parameter (value will be each object in the array)
// The description of the service request should be interpolated inside the <li> HTML representation.
// The function should return the HTML representation.


    let html = `
        <ul>
            ${requests.map(
                (request) => {
                    `<li>
                    ${request.description}
                    </li>`
                }
            ).join("")
            }
        </ul>
    `

    return html
}