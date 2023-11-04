export async function getListOfUsers(client: any) {
    try {
        const { data: users, error } = await client
            .from('users')
            .select('*');
        return users;
    } catch (error) {
        console.log("WTF");
    }
}

export async function getUser(id: number, client: any) {
    try {
        const { data: user, error } = await client
            .from('users')
            .select("*")
            .eq('id', id)
            .single();
        return user;
    } catch (error) {
        console.log("WTF");
    }
}

export async function deleteUser(id: number, client: any) {
    try {
        const { error } = await client
            .from('users')
            .delete()
            .eq('id', id);
    } catch (error) {
        console.log("WTF");
    }
}

export async function updateUser(id: number, updatedUserData: any, client: any) {
    try {
        const { id: userId, username, password, ...updatedUserDataWithoutId } = updatedUserData;

        const { newData, error } = await client
            .from('users')
            .update({ ...updatedUserDataWithoutId })
            .eq('id', id)
            .select();
        return newData;
    } catch (error) {
        console.log("WTF");
    }
}