import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Всё'
                },
                {
                    key: 'electric-guitars',
                    name: 'Электрогитары'
                },
                {
                    key: 'electric-strings',
                    name: 'Струны для электрогитар'
                },
                {
                    key: 'electric-bass-strings',
                    name: 'Струны для бас-гитар'
                },
                {
                    key: 'instr-cables',
                    name: 'Инструментальные кабели'
                },
                {
                    key: 'bass-guitars',
                    name: 'Бас-гитары'
                },
                {
                    key: 'acoustic-guitars',
                    name: 'Акустические'
                },
                {
                    key: 'drumm-kits',
                    name: 'Барабанные установки'
                },
                {
                    key: 'audio-interface',
                    name: 'Аудиоинтерфейсы'
                },
                {
                    key: 'pianos',
                    name: 'Клавишные'
                },
            ]
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories