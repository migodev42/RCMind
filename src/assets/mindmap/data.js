export default {
    id: 'root',
    text: '主题',
    showChildren: true,
    children: [
        {
            id: 'child1',
            text: '子结点1',
            showChildren: true,
            children: []
        },
        {
            id: 'child2',
            text: '子结点2',
            showChildren: true,
            children: [
                {
                    id: 'child2-1',
                    text: '子结点2-1',
                    showChildren: true,
                    children: []
                },
                {
                    id: 'child2-2',
                    text: '子结点2-2',
                    showChildren: true,
                    children: []
                },
            ]
        },
        {
            id: 'child3',
            text: '子结点3',
            showChildren: true,
            children: [
                {
                    id: 'child3-1',
                    text: '子结点3-1',
                    showChildren: true,
                    children: []
                },
                {
                    id: 'child3-1',
                    text: '子结点3-2',
                    showChildren: true,
                    children: []
                },      
            ]
        },

    ]
}