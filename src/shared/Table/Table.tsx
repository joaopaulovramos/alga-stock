import React from "react"
import organizeData from "../../utils/organizeDataForTable"
import Button from "../Button"
import './Table.scss'

export declare interface TableHeader {
  key: string
  value: string
  right?: boolean
}

declare interface TableProps {
  headers: TableHeader[]
  data: any[]

  enableActions?: boolean
  onDelete?: (item: any) => void
  onDetail?: (item: any) => void
  onEdit?: (item: any) => void

}



const Table: React.FC<TableProps> = (props) => {
  const [organizedData, indexedHeaders] = organizeData(props.data, props.headers)
  return <table className="table AppTable">
    <thead>
      <tr>
        {
          props.headers.map((header, index) =>
            <th 
              className={header.right ? 'right' : ''} 
              key={index}
            >
              {header.value}
            </th>)
        }
        {
        props.enableActions
        && <th className="right">Actions</th>
        }
      </tr>
    </thead>
    <tbody>
      {
        organizedData.map(((row, index) => {
          return <tr key={index}>
            {
              Object
                .keys(row)
                .map((item, indice) => 
                  item !== '$original' ? 
                  <td 
                  key={row.$original.id + indice}
                  className={indexedHeaders[item].right ? 'right':''}
                  >
                    {row[item]}
                  </td>
                  : null
                )
            }
            {
              props.enableActions &&
              <td className="actions right">
                {
                  props.onEdit &&
                    <Button 
                    onClick={() => props.onEdit && props.onEdit(row)}
                    >
                      Edit
                    </Button>
                }
                {
                  props.onDetail &&
                  <Button 
                  onClick={() => props.onDetail && props.onDetail(row)}
                  >
                    Detail
                  </Button>
                }
                {
                  props.onDelete &&
                    <Button 
                    onClick={() => props.onDelete && props.onDelete(row)}
                    >
                      Delete
                    </Button>
                }
              </td>
            }

          </tr>
        }))
      }
    </tbody>
  </table>
}

export default Table