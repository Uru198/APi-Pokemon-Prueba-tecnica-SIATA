import React, { useState } from "react";


import 'animate.css';


class Pokemon extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            img: '#',
            url: '',
            id:"",
            habilidad:""
        }
    }


    fetchJale = async () => {

        let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.name}`)
        let data = await res.json()


        console.log(data.name);
        console.log(data.species.url);
        console.log(data.sprites.front_default)
        console.log(data)
        this.setState({
            img: data.sprites.front_default
        })
        this.setState({
            url: data.species.url
        })
        this.setState({
            name: data.name
        })
        this.setState({
            id: data.id
        })
        this.setState({
            habilidad: data.abilities[0].ability.name
        })
        
        
        
    }


    handleName = event => {
        this.setState({
            name: event.target.value
        })
    }


    handleSubmit = event => {
        var poke = this.state.name;
        console.log(poke)

        this.fetchJale()

        this.setState({
            name: '',
        })
        event.preventDefault()
    }




    render() {
        return (
            <div className=" body bg-[url('../public/img/fondo.jpg')]">


                <div className="card-body mr-[1000px] sm:mr-[500px] md:mr-[400px] lg:mr-[300px] xl:mr-[200px] 2xl:mr-[10px]">

                    <form onSubmit={this.handleSubmit}>
                        <br />
                        <br />
                        <label className="label animate__animated animate__tada">APi Pokemon</label>
                        <br />
                        <br />
                        <div className="buscador">
                            <input type="text" placeholder="¿Quien es ese pokemon?" value={this.state.name} onChange={this.handleName} class="input input-bordered input-error w-full max-w-xs mr-5"
                            />
                            <button class="btn btn-ghost btn-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100">
                                    <path d="M 30 50a 1 1 1 0 1 40 0h-12.5a 1 1 1 0 0 -15 0z" fill="#f00" stroke="#222"></path>
                                    <circle cx="50" cy="50" r="5" fill="#222" stroke="#222"></circle>
                                    <path d="M 30 50a 1 1 1 0 0 40 0h-12.5a 1 1 1 0 1 -15 0z"
                                        fill="#fff" stroke="#222"></path>
                                </svg>
                            </button>
                        </div>

                    </form>

                    <label for="my-modal" class=""> <img src={this.state.img} alt="." /> </label>


                    <input type="checkbox" id="my-modal" class="modal-toggle" />
                    <div class="modal ">
                        <div class="modal-box bg-[#4DAD5B]">
                            <div class="modal-action mt-1    mr-1">

                                <label for="my-modal" class="btn btn-circle mr-[100xp]">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </label>
                            </div>
                           <div className="card-body">
                            <h1 className="text-[100px]">
                                 {this.state.name}
                            </h1>
                          
                           </div>
                            <img src={this.state.img} alt="imagen" className="modal1" />
                            <div className="card-body">
                                <h1 className="text-[20px] underline "><b>Caracteristicas</b></h1>
                                <p><b>Url: </b> {this.state.url}</p>
                                <p><b>N°: </b> {this.state.id}</p>
                                <p><b>Habilidad: </b> {this.state.habilidad}</p>

                            </div>

                        </div>
                    </div>
                </div>

            </div >
        );
    }

}


export default Pokemon
