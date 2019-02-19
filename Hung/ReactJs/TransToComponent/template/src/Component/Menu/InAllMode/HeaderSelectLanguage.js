import React, { Component } from 'react';
const $ = window.$;

class HeaderSelectLanguage extends Component {
    componentDidMount() {
        $(".selection-1").select2({
			minimumResultsForSearch: 20,
			dropdownParent: $('#dropDownSelect1')
        });
    }
    render() {
        return (
            <div>
                <div className="topbar-language rs1-select2">
                    <select className="selection-1" name="time">
                        <option>USD</option>
                        <option>EUR</option>
                    </select>
                    
                </div>
                
            </div>
        );
    }
}

export default HeaderSelectLanguage;