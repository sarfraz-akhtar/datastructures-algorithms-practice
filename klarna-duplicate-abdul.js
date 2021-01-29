const MIN_TRANSACTION_GAP = 60 * 1000;

const isDuplicate = (t1, t2) => {
    if (t1.sourceAccount === t2.sourceAccount && t1.targetAccount === t2.targetAccount && t1.category === t2.category && t1.amount === t2.amount) {
        if (Math.abs(new Date(t1.time).getTime() - new Date(t2.time).getTime()) < MIN_TRANSACTION_GAP) {
            return true;
        }
    }

    return false;
};

const sorter = (t1, t2) => new Date(t1.time).getTime() - new Date(t2.time).getTime();

function findDuplicateTransactions(transactions = []) {
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



    let groupsOutput = [];

    for (let i = 0; i < transactions.length; i++) {
        const t = transactions[i];

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
    return groupsOutput;
}


var result = findDuplicateTransactions([
  {
    id: 6,
    sourceAccount: 'my_account',
    targetAccount: 'internet_shop',
    amount: -250,
    category: 'other',
    time: '2018-03-01T22:16:40.000Z'
  },
  {
    id: 102,
    sourceAccount: 'my_account',
    targetAccount: 'internet_shop',
    amount: -250,
    category: 'other',
    time: '2018-03-01T22:16:50.000Z'
  },
  {
    id: 13,
    sourceAccount: 'my_account',
    targetAccount: 'coffee_shop',
    amount: -50,
    category: 'eating_out',
    time: '2018-04-01T10:24:00.000Z'
  },
  {
    id: 14,
    sourceAccount: 'my_account',
    targetAccount: 'coffee_shop',
    amount: -50,
    category: 'eating_out',
    time: '2018-04-01T10:24:40.000Z'
  },
  {
    id: 15,
    sourceAccount: 'my_account',
    targetAccount: 'coffee_shop',
    amount: -50,
    category: 'eating_out',
    time: '2018-04-01T10:25:10.000Z'
  },
  {
    id: 30,
    sourceAccount: 'my_account',
    targetAccount: 'coffee_shop',
    amount: -90,
    category: 'eating_out',
    time: '2018-05-07T09:54:21.000Z'
  },
  {
    id: 31,
    sourceAccount: 'my_account',
    targetAccount: 'coffee_shop',
    amount: -90,
    category: 'eating_out',
    time: '2018-05-07T09:55:10.000Z'
  },
  {
    id: 32,
    sourceAccount: 'my_account',
    targetAccount: 'coffee_shop',
    amount: -90,
    category: 'eating_out',
    time: '2018-05-07T09:56:09.000Z'
  },
  {
    id: 33,
    sourceAccount: 'my_account',
    targetAccount: 'coffee_shop',
    amount: -90,
    category: 'eating_out',
    time: '2018-05-07T09:57:05.000Z'
  }
]);