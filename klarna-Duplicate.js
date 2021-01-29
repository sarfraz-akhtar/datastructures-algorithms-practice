const data = [
{
        id: 50,
        sourceAccount: 'A',
        targetAccount: 'B',
        amount: 100,
        category: 'eating_out',
        time: '2018-03-02T10:35:00.000Z'
    },
{
        id: 3,
        sourceAccount: 'A',
        targetAccount: 'B',
        amount: 100,
        category: 'eating_out',
        time: '2018-03-02T10:34:30.000Z'
    },
    {
        id: 1,
        sourceAccount: 'A',
        targetAccount: 'B',
        amount: 100,
        category: 'eating_out',
        time: '2018-03-02T10:33:00.000Z'
    },
    {
        id: 6,
        sourceAccount: 'A',
        targetAccount: 'C',
        amount: 250,
        category: 'other',
        time: '2018-03-02T10:33:05.000Z'
    },
    {
        id: 4,
        sourceAccount: 'A',
        targetAccount: 'B',
        amount: 100,
        category: 'eating_out',
        time: '2018-03-02T10:36:00.000Z'
    },
    {
        id: 2,
        sourceAccount: 'A',
        targetAccount: 'B',
        amount: 100,
        category: 'eating_out',
        time: '2018-03-02T10:33:50.000Z'
    },
    {
        id: 5,
        sourceAccount: 'A',
        targetAccount: 'C',
        amount: 250,
        category: 'other',
        time: '2018-03-02T10:33:00.000Z'
    }
];

const MIN_TRANSACTION_GAP = 60 * 1000;

const isDuplicate = (t1, t2) => {
    if (t1.sourceAccount === t2.sourceAccount && t1.targetAccount === t2.targetAccount && t1.category === t2.category && t1.amount === t2.amount) {
        if (Math.abs(new Date(t1.time).getTime() - new Date(t2.time).getTime()) < MIN_TRANSACTION_GAP) {
            return true;
        }
    }

    return false;
}

const groups = {};

const getGroup = (t, groups) => groups[t.category] !== undefined &&
    groups[t.category][t.sourceAccount] !== undefined &&
    groups[t.category][t.sourceAccount][t.targetAccount] !== undefined &&
    groups[t.category][t.sourceAccount][t.targetAccount][t.amount] !== undefined ?
    groups[t.category][t.sourceAccount][t.targetAccount][t.amount] : undefined;

const insertGroup = (t, groups) => {
    const newGroupList = [t];
    groups[t.category] = {
        [t.sourceAccount]: {
            [t.targetAccount]: {
                [t.amount]: newGroupList
            }
        }
    };

    return newGroupList;
};

const sorter = (t1, t2) => new Date(t1.time).getTime() - new Date(t2.time).getTime();

let groupsOutput = [];

for (let i = 0; i < data.length; i++) {
    const t = data[i];

    let existingGroup = getGroup(t, groups);
    if (existingGroup === undefined) {
        insertGroup(t, groups);
        continue;
    }

    existingGroup.push(t);
    if (groupsOutput.indexOf(existingGroup) === -1) {
        groupsOutput.push(existingGroup);
    }
}

for (let i = 0; i < groupsOutput.length; i++) {
    const transactionGroup = groupsOutput[i];
    transactionGroup.sort(sorter);

    const duplicateGroup = [transactionGroup[0]];
    for (let j = 1; j < transactionGroup.length; j++) {
        if (!isDuplicate(transactionGroup[j], duplicateGroup[duplicateGroup.length - 1])) {
            if (duplicateGroup.length === 1) {
                duplicateGroup[duplicateGroup.length - 1] = transactionGroup[j];
            }
        } else {
            duplicateGroup.push(transactionGroup[j]);
        }
    }
    groupsOutput[i] = duplicateGroup;
}

groupsOutput = groupsOutput.filter(groups => groups.length > 1);

console.log(JSON.stringify(groupsOutput, null, 2));