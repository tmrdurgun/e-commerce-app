import React, {Component} from 'react';
import {Grid, Paper, Button,   } from '@material-ui/core';
import './style.scss';

class ProductDetail extends Component {
    constructor(props){
        super(props);

        this.state = {
            pId: null,
        }
    }

    render(){
        const { product } = this.props.location;
        console.log(product);

        return(
            <>
                <Grid container className="product-detail" data-testid="product-detail" spacing={2}>
                    <Grid item md={3}>
                        <Paper className="product-detail-image">
                            <img src={product.image_link} alt={product.image_link} />
                        </Paper>
                    </Grid>
                    <Grid item md={6}>
                        <Paper className="product-detail-info">
                            <h4 className="title">{product.title}</h4>
                            <div className="price-container d-flex">
                                <span className="price">{product.price}</span>
                                <span className="stock">{product.availability}</span>
                            </div>
                            <div className="desc">
                                {product.description}
                            </div>

                            <div className="product-link">
                                <a href={product.link} target="_blank" rel="noreferrer">
                                    <Button variant="outlined">Visit</Button>
                                </a>
                            </div>
                            
                        </Paper>
                    </Grid>
                </Grid>
            </>
        )
    }
}

export default ProductDetail;
