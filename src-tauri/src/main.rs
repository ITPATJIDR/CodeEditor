// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

#[tauri::command]
fn folder_path(path: &str) -> String {
    println!("path: {}",path);
    return path.to_string()
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            folder_path
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
