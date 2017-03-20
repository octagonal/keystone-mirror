import React from 'react';
import ItemsTableCell from '../../components/ItemsTableCell';
import ItemsTableValue from '../../components/ItemsTableValue';
import { plural } from '../../../admin/client/utils/string';

export default class ListColumn extends React.Component {
	displayName: 'ListColumn'
	props: {
		col: React.PropTypes.object,
		data: React.PropTypes.object,
	}

	getValue () {
		const value = this.props.data.fields[this.props.col.path];
		return Array.isArray(value) ? plural(value.length, '* Value', '* Values') : ''
	}

	render () {
		const value = this.getValue()
		return (
			<ItemsTableCell>
				<ItemsTableValue padded interior field={this.props.col.type}>
					{value}
				</ItemsTableValue>
			</ItemsTableCell>
		)
	}
};
