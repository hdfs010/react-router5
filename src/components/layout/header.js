import React from 'react'
import { Col, Row } from 'antd'
import * as styles from './index.less'

function Header() {
	return (
		<Row id={styles.header}>
			<Col span={24}>
				<span className={styles.logoText}>Admin</span>
			头部
			</Col>
		</Row>
	)
}

export default Header