import React, {Component} from 'react';
import MUIDataTable from 'mui-datatables';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import {Container} from '@material-ui/core';

import {
  getProducts,
} from '../../store/actions';

import { createStructuredSelector } from 'reselect';

import {
  selectProducts,
} from '../../store/selectors';

const myTheme = createMuiTheme({
    overrides: {
      MUIDataTableHeadCell: {
        root: {
          // padding: '0 15px 0 0',
          whiteSpace: 'nowrap',
        },
      },
      MUIDataTableBodyCell: {
        root: {
          whiteSpace: 'nowrap',
          // padding: '0 15px 0 0',
        },
      },
      MUIDataTable: {
        paper: {
          boxShadow: 'none',
          border: '1px solid #dee2e6',
        },
        responsiveScroll: {
          maxHeight: 'unset',
          overflowX: 'unset',
          overflowY: 'unset',
        },
      },
    },
  });

  const columns = [
    {
        name: '_id',
        label: 'ID',
        options: {
            filter: false,
            sort: false,
            display: false
        },
    },
    {
        name: 'title',
        label: 'Title',
        options: {
            filter: false,
            sort: false,
            customBodyRender: (data, rowData) => (
                <div className="text-ellipsis" style={{width: '300px'}} data-testid={`products-product-item-${rowData.rowIndex}`}>
                  {data}
                </div>
              ),
        },
    },
    {
        name: 'description',
        label: 'description',
        options: {
            filter: false,
            sort: false,
            customBodyRender: (data, rowData) => (
                <div className="text-ellipsis" style={{width: '300px'}}>
                  {data}
                </div>
              ),
        },
    },
    {
        name: 'availability',
        label: 'availability',
        options: {
            filter: false,
            sort: false,
            display: false
        },
    },
    {
        name: 'price',
        label: 'price',
        options: {
            filter: false,
            sort: false,
        },
    },
    {
        name: 'brand',
        label: 'brand',
        options: {
            filter: false,
            sort: false,
        },
    }
];

const options = {
    selectableRows: 'none',
    search: true,
    filter: false,
    download: true,
    print: false,
    rowsPerPage: 15,
    rowsPerPageOptions: [15, 30, 60],
    fixedHeader: true,
    responsive: 'scrollMaxHeight',
    textLabels: {
      body: {
        noMatch: 'No records match!',
        toolTip: 'Sort',
      },
      toolbar: {
        search: 'Search',
        viewColumns: 'Columns',
        downloadCsv: 'Download as CSV',
      },
      pagination: {
        next: 'Next Page',
        previous: 'Previous Page',
        rowsPerPage: 'Per Page:',
        displayRows: 'Displayed - Row Count:',
      },
      viewColumns: {
        title: 'Show Columns',
        titleAria: 'Show/Hide Columns',
      },
    }
  };

class Products extends Component {
    constructor(props){
        super(props);

        this.state = {
            products: null,
            selectedRow: null,
            searchText: ''
        }
    }

    async componentDidMount(){
      this.props.getProducts();
    }

    render(){
        const { searchText } = this.state;
        const { products } = this.props;

        return(
            <>
<Container>
        {products && <MuiThemeProvider theme={myTheme}>
          <MUIDataTable
            title="Müşteriler"
            data={products}
            columns={[...columns,
            
            {
              name: '',
              label: 'View',
              options: {
                filter: false,
                sort: false,
                customBodyRender: (data, rowData) => {
                  const selectedProduct = products[rowData.rowIndex];
                  return (
                    <span style={{ padding: 0, border: 'none', boxShadow: 'none', cursor: 'pointer' }}>
                     <Link to={{ 
                          pathname: "/product/595212758daa6810cbba4104",
                          product: selectedProduct
                        }} style={{ textDecoration: 'none' }}> Details </Link>
                    </span>
                  )
                },
              },
            },
            ]}
            options={{
              ...options, 
              searchText: searchText,
              onRowClick: (rowData) => {
                const selectedItem = {
                  id: rowData[0],
                  name: rowData[1]
                }
                this.setState({ selectedRow: selectedItem });
              }
            }}
          />
        </MuiThemeProvider>} 
        </Container>
 
            </>
        )
    }
}

const mapStateToProps = createStructuredSelector({
  products: selectProducts(),
});

const mapDispatchToProps = dispatch => (
  (
    bindActionCreators({
      getProducts,
    }, dispatch)
  )
);

export default connect(mapStateToProps, mapDispatchToProps)(Products);
