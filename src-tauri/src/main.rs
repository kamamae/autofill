#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]


use std::process::Command;
use tauri::{CustomMenuItem, Menu, Submenu};


#[tauri::command]
fn print_document(file_path: String) -> String {
    let print_command = format!("Start-Process -FilePath \"{}\" -Verb Print", file_path);

    let status = Command::new("powershell")
        .arg("-Command")
        .arg(&print_command)
        .status()
        .expect("Failed to run command");

    if status.success() {
        "Document printed successfully".to_string()
    } else {
        "Failed to print document".to_string()
    }
}

fn main() {

    let doc1 = CustomMenuItem::new("doc1".to_string(), "Постановление");
    let doc2 = CustomMenuItem::new("doc2".to_string(), "Постановление2");
    let submenu = Submenu::new("Файл", Menu::new().add_item(doc1).add_item(doc2));
    let menu = Menu::new()
            .add_submenu(submenu)
            .add_item(CustomMenuItem::new("print", "Печать"));
    tauri::Builder::default()
      .invoke_handler(tauri::generate_handler![print_document])
      .menu(menu)
      .on_menu_event(|event| {
        match event.menu_item_id() {
            "print" => {
                let window = event.window();
                window.emit("menuItemClicked", Some("print")).expect("Failed to emit event - print");
            }
          _ => {}
        }
      })
      .run(tauri::generate_context!())
      .expect("error while running tauri application");
    }