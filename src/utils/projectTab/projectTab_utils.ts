export const extract_folder_name = (path: string) => {
	const pathSplit = path.split('/')
	const folder_name:string = pathSplit[pathSplit.length - 1]

	return folder_name
}