import React from 'react';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import BadgeDetails from './BadgeDetails';

import api from '../api'

class BadgeDetailsContainer extends React.Component{

    state = {
        modalIsOpen:false,
        loading:true,
        error:null,
        data:undefined,
    }

    componentDidMount(){
        this.fetchData()
    };

    fetchData = async () =>{
        this.setState({ loading:true, error:null })
        try {
            const data = await api.badges.read(
                this.props.match.params.badgeId
            )    
            this.setState({loading:false, data:data})
        } catch (error) {
            
        }
    };

    handleModal = e => {
        this.setState({ modalIsOpen:!this.state.modalIsOpen })
    };

    handleDeleteBadge = async e =>{
        this.setState({loading:true, error:null})
        
        try {
            await api.badges.remove(
                this.props.match.params.badgeId
            )

            this.props.history.push('/badges')
        } catch (error) {
            this.setState({loading:false, error:error})
        }
    }
    render(){
        if(this.state.loading){
            return <PageLoading/>
        }
        if(this.state.error){
            return <PageError error={this.state.error}/>
        }

        return (
            <BadgeDetails 
                badge={this.state.data} 
                handleModal={this.handleModal}
                modalIsOpen={this.state.modalIsOpen}
                onDeleteBadge={this.handleDeleteBadge}
            />
        )
    }
}

export default BadgeDetailsContainer;