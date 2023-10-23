import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

function AddBeerPage() {

    const [newBeer, setNewBeer] = useState({
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: 0,
        contributed_by: ''
    })

    const navigate = useNavigate()

    const handleTextChange = (e) => {
        setNewBeer((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

    const handleNumberChange = (e) => {
        setNewBeer((prev) => ({...prev, [e.target.name]: Number(e.target.value)}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
            .then((response) => {
                console.log(response.data.message)
                navigate('/beers')
                setNewBeer({
                    name: '',
                    tagline: '',
                    description: '',
                    first_brewed: '',
                    brewers_tips: '',
                    attenuation_level: 0,
                    contributed_by: ''
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }


    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name
                    <input name="name" type="text" value={newBeer.name} onChange={handleTextChange} />
                </label>
                <label>
                    Tagline
                    <input name="tagline" type="text" value={newBeer.tagline} onChange={handleTextChange} />
                </label>
                <label>
                    Description
                    <textarea name="description" value={newBeer.description} onChange={handleTextChange} />
                </label>
                <label>
                    First Brewed
                    <input name="first_brewed" type="text" value={newBeer.first_brewed} onChange={handleTextChange} />
                </label>
                <label>
                    Brewers Tips
                    <input name='brewers_tips' type="text" value={newBeer.brewers_tips} onChange={handleTextChange} />
                </label>
                <label>
                    Attenuation Level
                    <input name="attenuation_level" type="number" value={newBeer.attenuation_level} onChange={handleNumberChange} />
                </label>
                <label>
                    Contributed By
                    <input name="contributed_by" type="text" value={newBeer.contributed_by} onChange={handleTextChange} />
                </label>

                <button type="submit">Add Beer</button>
            </form>
        </div>
    )
}

export default AddBeerPage;


// The form should include the following:

// input:
// Label: Name
// Attributes: name="name" and type="text"
// input:
// Label: Tagline
// Attributes: name="tagline" and type="text"
// textarea:
// Label: Description
// Attributes: name="description" and type="text"
// input:
// Label: First Brewed
// Attributes: name="first_brewed" and type="text"
// input:
// Label: Brewer's Tips
// Attributes: name="brewers_tips" and type="text"
// input:
// Label: Attenuation Level
// Attributes: name="attenuation_level" and type="number"
// input:
// Label: Contributed By
// Attributes: name="contributed_by" and type="text"
// button:
// Text: "Add Beer"
// Attributes: type="submit"